import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import contractABI from "../assets/INEnft.json";
import { APP_CONSTANTS } from "../constants";
import "../styles/globals.css";
function Inenft() {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState("Connect Wallet");
  const [totalSupply, setTotalSupply] = useState("");
  const [cost, setCost] = useState("");
  const [contract, setContract] = useState();
  const [numberInput, setNumberInput] = useState("");

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };
  useEffect(() => {
    async function connectToContract() {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const contract = new ethers.Contract(
            APP_CONSTANTS.NFT_CONTRACT_ADDRESS,
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
  }, [account]);

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



  const getTotalSupply = async () => {
    try {
      const total = await contract.maxSupply();
      setTotalSupply(total.toString());
      console.log("tx successfull");
    } catch (error) {
      console.error(error);
    }
  };
  
  const getcost = async () => {
    try {
      const Cost = await contract.cost();
      Cost = Cost / 1000000000000000000;
      setCost(Cost.toString());
      console.log("tx successfull");
    } catch (error) {
      console.error(error);
    }
  };
  
   const mint = async () => {
    try {
      const tx = await contract.mint(1).send({
        from : provider,
        value : 5
});
      await tx.wait();
      console.log("tx successfull");
      toast.success("Joined INE successfully");
    } catch (error) {
      console.error(error);
    }
  }; 
  const viewNft = async (e) => {
    try {
      e.preventDefault();
      const URI = await contract.tokenURI(numberInput);
      console.log(URI);
      console.log("tx successfull");
      setNumberInput("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <h1 className="text-3xl">INE Dapp</h1>
        <button
          onClick={handleConnect}
          className="btn btn-primary mt-2 md:mt-0 md:ml-4"
        >
          {account}
        </button>
        {provider && (
          <button className="btn btn-danger mt-2 md:mt-0 md:ml-4">
            Disconnect Wallet
          </button>
        )}
      </header>
      <button onClick={mint} className="btn btn-primary mt-2 md:mt-0 md:ml-4">
        Mint NFT
      </button>
      <button
        onClick={getTotalSupply}
        className="btn btn-primary mt-2 md:mt-0 md:ml-4"
      >
        Get Total Supply
      </button>
      <h3>Total Supply: {totalSupply} </h3>

      <button
        onClick={getcost}
        className="btn btn-primary mt-2 md:mt-0 md:ml-4"
      >
        Get Cost
      </button>
      <h3> Dollar cost : {cost} </h3>
      <form onSubmit={viewNft}>
        <label>
          VIEW YOUR INE MEMBERSHIP:
          <input
            type="number"
            value={numberInput}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Inenft };
