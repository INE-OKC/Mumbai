import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../assets/INEpool.json";
import { APP_CONSTANTS } from "../constants";
import "../styles/globals.css";
const SavingsContract = () => {
  const [provider, setProvider] = useState();
  const [contract, setContract] = useState();
  const [account, setAccount] = useState("Connect Wallet");
  const [ethBalance, setEthBalance] = useState(0);
  const [ineBalance, setIneBalance] = useState(0);
  const [connected, setConnected] = useState(false);
  const [depositEthAmount, setDepositEthAmount] = useState("");
  const [withdrawEthAmount, setWithdrawEthAmount] = useState("");
  const [withdrawIneAmount, setWithdrawIneAmount] = useState("");

  // Contract initialization
  useEffect(() => {
    async function connectToContract() {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const contract = new ethers.Contract(
            APP_CONSTANTS.POOL_CONTRACT_ADDRESS,
            contractABI,
            signer
          );
          console.log(contract);
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

  // Function to connect using MetaMask
  const connectMetamask = async () => {
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
        setConnected(true);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      console.error("Wallet not found");
    }
  };

  // Function to deposit ETH
  const deposit = async () => {
    // TODO: Deposit ETH
    if (depositEthAmount) {
      const amountWei = ethers.utils.parseEther(depositEthAmount);
      const tx = await contract.deposit({ value: amountWei });
      await tx.wait(1);
      console.log("tx successful");
      fetchBalances();
    }
  };

  // Function to withdraw INE
  const withdrawIne = async () => {
    // TODO: Withdraw INE
    try {
      if (withdrawIneAmount) {
        const amountWei = ethers.utils.parseEther(withdrawIneAmount);
        const gasLimit = ethers.BigNumber.from("300000");
        const tx = await contract.withdrawEth(amountWei, { gasLimit });
        await tx.wait(1);
        console.log("withdraw tx successful");
        fetchBalances();
      }
    } catch (error) {
      console.log("Withdraw INE failed:", error.reason);
    }
  };

  // Function to withdraw ETH
  const withdrawEth = async () => {
    // TODO: Withdraw ETH
    try {
      if (withdrawEthAmount) {
        const amountWei = ethers.utils.parseEther(withdrawEthAmount);
        const gasLimit = ethers.BigNumber.from("200000");
        const tx = await contract.withdrawEth(amountWei, { gasLimit });
        await tx.wait(1);
        console.log("withdraw tx successful");
        fetchBalances();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalances = async () => {
    const ethBalance = await contract.getEthBalance(account);
    setEthBalance(parseFloat(ethers.utils.formatEther(ethBalance)).toFixed(2));
    const ineBalance = await contract.getIneBalance(account);
    setIneBalance(parseFloat(ethers.utils.formatEther(ineBalance)).toFixed(2));
  };

  useEffect(() => {
    if (connected) {
      fetchBalances();
    }
  }, [connected]);

  return (
    <div>
      <h1>Savings Contract</h1>
      <button onClick={connectMetamask}>Connect with MetaMask</button>
      {connected && (
        <>
          <h2>ETH Balance: {ethBalance}</h2>
          <h2>INE Balance: {ineBalance}</h2>
          <input
            type="number"
            value={depositEthAmount}
            onChange={(e) => setDepositEthAmount(e.target.value)}
            placeholder="Deposit ETH amount"
          />
          <button onClick={deposit}>Deposit ETH</button>
          <input
            type="number"
            value={withdrawIneAmount}
            onChange={(e) => setWithdrawIneAmount(e.target.value)}
            placeholder="Withdraw INE amount"
          />
          <button onClick={withdrawIne}>Withdraw INE</button>
          <input
            type="number"
            value={withdrawEthAmount}
            onChange={(e) => setWithdrawEthAmount(e.target.value)}
            placeholder="Withdraw ETH amount"
          />
          <button onClick={withdrawEth}>Withdraw ETH</button>
        </>
      )}
    </div>
  );
};

export default SavingsContract;
