import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { FaComment, FaRecycle, FaRetweet, FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import contractABI from "../assets/INEdapp.json";
import { APP_CONSTANTS } from "../constants";

function Dapp() {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState("Connect Wallet");
  const [commentInputs, setCommentInputs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [contract, setContract] = useState();
  const [comment, setComment] = useState();
  useEffect(() => {
    async function connectToContract() {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const contract = new ethers.Contract(
            APP_CONSTANTS.CONTRACT_ADDRESS,
            contractABI,
            signer
          );

          setContract(contract);
          setProvider(provider);
        } else {
          console.error("Metamask not found");
        }
      } catch (error) {
        console.error("Error connecting to contract:", error);
      }
    }

    connectToContract();
  }, []);

  useEffect(() => {
    refreshPosts();
  }, [contract]);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setProvider(provider);
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      console.error("Wallet not found");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment) {
      try {
        const prefName = "My Preferred Name";
        const tx = await contract.writepost(prefName, comment);

        await tx.wait();
        console.log("writepost function executed successfully");
        setComment("");
        refreshPosts();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshPosts = async () => {
    try {
      if (contract) {
        const postss = await contract.getAllposts();
        setPosts(postss);
        setCommentInputs(Array(postss.length).fill(""));
      }
    } catch (error) {
      console.error("Error retrieving posts:", error);
    }
  };

  const handleLike = async (index) => {
    try {
      const tx = await contract.upvote(index);
      await tx.wait();
      console.log("writepost function executed successfully");
      refreshPosts();
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
      await contract.methods.repost(index).send({ from: accounts[0] });
      refreshPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentChange = (event, index) => {
    const { value } = event.target;
    setCommentInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index] = value;
      return updatedInputs;
    });
  };

  const handleAddComment = async (index) => {
    const comment = commentInputs[index];
    if (!comment) {
      toast.error("Please enter a comment");
      return;
    }

    try {
      // Call the contract method to add a comment
      const tx = await contract.addComment(index, comment);
      await tx.wait();
      toast.success("Comment added successfully");
      setCommentInputs((prevInputs) => {
        const updatedInputs = [...prevInputs];
        updatedInputs[index] = "";
        return updatedInputs;
      });
      refreshPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <h1>INE Dapp</h1>
        <button onClick={handleConnect} className="btn btn-primary">
          {account}
        </button>
        {provider && (
          <button className="btn btn-danger">Disconnect Wallet</button>
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
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </Form>
        </div>
        <div className="App-posts">
          <h3>Posts</h3>
          {posts.map((post, index) => (
            <Card key={index} className="mb-4">
              <Card.Body>
                <Card.Title>{post[0]}</Card.Title>
                <Card.Text>{post[1]}</Card.Text>
                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleLike(index)}
                  >
                    <FaThumbsUp /> Like
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddComment(index)}
                  >
                    <FaComment /> Comment
                  </button>
                </div>
                {post.comments && (
                  <div>
                    <h5>Comments:</h5>
                    <ul>
                      {post.comments.map((comment, commentIndex) => (
                        <li key={commentIndex}>{comment}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentInputs[index]}
                    onChange={(e) => handleCommentChange(e, index)}
                    className="form-control"
                  />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleAddComment(index)}
                  >
                    Add Comment
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Dapp };
