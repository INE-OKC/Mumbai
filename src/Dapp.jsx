import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { FaComment, FaRecycle, FaRetweet, FaThumbsUp } from "react-icons/fa";

import { Web3AuthCore } from "@web3auth/core";
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { TorusWalletConnectorPlugin } from "@web3auth/torus-wallet-connector-plugin";


import RPC from "./evm";
import { APP_CONSTANTS } from "./constants";

import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const clientId = APP_CONSTANTS.CLIENT_ID; 

function App() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [posts, setposts] = useState(null);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [newpostName, setNewpostName] = useState("");
  const [newpostDescription, setNewpostDescription] = useState("");
  const refreshTime = APP_CONSTANTS.REACT_APP_REFRESH_TIMER * 1000;
  const [torusPlugin, setTorusPlugin] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3AuthCore({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x41",
            rpcTarget: APP_CONSTANTS.RPC_TARGET,
          },
        });

       
        const torusPlugin = new TorusWalletConnectorPlugin({
          torusWalletOpts: {},
          walletInitOptions: {
            whiteLabel: {
              theme: { isDark: true, colors: { primary: "#ffffff" } },
              logoDark:
                "https://i.ibb.co/kDNCfC9/reshot-icon-wallet-9-H3-QMSDLFR.png",
              logoLight:
                "https://i.ibb.co/kDNCfC9/reshot-icon-wallet-9-H3-QMSDLFR.png",
            },
            useWalletConnect: true,
            enableLogging: true,
          },
        });

        await web3auth.addPlugin(torusPlugin);
        setTorusPlugin(torusPlugin);

        await web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);

        await web3auth.init();
        if (web3auth.isActive()) {
          const provider = await web3auth.getProvider();
          setProvider(provider);
          subscribeToEvents(web3auth, provider);
        }
      } catch (err) {
        console.error(err);
      }
    };

    init();
  }, []);

  const subscribeToEvents = (web3auth, provider) => {
    const emitter = web3auth.getEventEmitter();
    emitter.on("userSignOut", handleSignOut);
    emitter.on("userSignIn", handleSignIn);
    emitter.on("txPending", handleTransactionPending);
    emitter.on("txSuccess", handleTransactionSuccess);
    emitter.on("txError", handleTransactionError);

    const { ethereum } = window;
    if (ethereum) {
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("disconnect", handleDisconnect);
      ethereum.on("message", handleMessage);
    }
  };

  const handleSignIn = async () => {
    const provider = await web3auth.getProvider();
    setProvider(provider);
  };

  const handleSignOut = () => {
    setProvider(null);
  };

  const handleTransactionPending = () => {
    toast.info("Transaction is pending...", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleTransactionSuccess = () => {
    toast.success("Transaction successful!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleTransactionError = () => {
    toast.error("Transaction failed!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleAccountsChanged = () => {
    window.location.reload();
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const handleDisconnect = () => {
    window.location.reload();
  };

  const handleMessage = () => {
    // Handle custom messages here if needed
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (comment) {
      try {
        const contract = new provider.eth.Contract(
          INEdapp.abi,
          APP_CONSTANTS.CONTRACT_ADDRESS
        );

        const accounts = await provider.eth.getAccounts();

        await contract.methods
          .addpost(comment)
          .send({ from: accounts[0] });

        setComment("");
        refreshposts();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshposts = async () => {
    const contract = new provider.eth.Contract(
      INEdapp.abi,
      APP_CONSTANTS.CONTRACT_ADDRESS
    );

    const postsCount = await contract.methods.getpostsCount().call();
    const allposts = [];

    for (let i = postsCount - 1; i >= 0; i--) {
      const post = await contract.methods.getpost(i).call();
      allposts.push(post);
    }

    setposts(allposts);
  };

  const handleLike = async (index) => {
    try {
      const contract = new provider.eth.Contract(
        INEdapp.abi,
        APP_CONSTANTS.CONTRACT_ADDRESS
      );

      const accounts = await provider.eth.getAccounts();

      await contract.methods
        .likepost(index)
        .send({ from: accounts[0] });

      refreshposts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRepost = async (index) => {
    try {
      const contract = new provider.eth.Contract(
        INEdapp.abi,
        APP_CONSTANTS.CONTRACT_ADDRESS
      );

      const accounts = await provider.eth.getAccounts();

      await contract.methods
        .repost(index)
        .send({ from: accounts[0] });

      refreshposts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = () => {
    refreshposts();
  };

  const handleLogin = async () => {
    try {
      if (web3auth && torusPlugin) {
        await web3auth.login(torusPlugin);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      if (web3auth) {
        await web3auth.logout();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (provider) {
      refreshposts();
    }
  }, [provider]);

  return (
    <div className="App">
      <ToastContainer />

      <header className="App-header">
        <h1>INE Dapp</h1>
        {!provider && (
          <button onClick={handleLogin}>Connect Wallet</button>
        )}
        {provider && (
          <button onClick={handleLogout}>Disconnect Wallet</button>
        )}
      </header>

      <div className="App-content">
        <div className="App-post-form">
          <h3>Compose a new post</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="comment">
              <Form.Control
                type="text"
                placeholder="What's on your mind?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </Form.Group>
            <button type="submit">post</button>
          </Form>
        </div>

        <div className="App-posts">
          <h3>posts</h3>
          {posts &&
            posts.map((post, index) => (
              <Card key={index}>
                <Card.Body>
                  <Card.Title>{post[0]}</Card.Title>
                  <Card.Text>{post[1]}</Card.Text>
                  <div className="App-post-actions">
                    <span onClick={() => handleLike(index)}>
                      <FaThumbsUp /> {post[2]}
                    </span>
                    <span onClick={() => handleRepost(index)}>
                      <FaRepost /> {post[3]}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
