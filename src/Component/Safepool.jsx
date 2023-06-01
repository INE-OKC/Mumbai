import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import SavingsContract from '../../contracts/INEpool.json';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [ethBalance, setEthBalance] = useState('0');
  const [ineBalance, setIneBalance] = useState('0');
  const [ethAmount, setEthAmount] = useState('');
  const [ineAmount, setIneAmount] = useState('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    const initContract = async () => {
      if (web3) {
        try { const networkId = 65;
          const deployedNetwork = SavingsContract.networks[networkId];
        const contractAddress = "0x8b88DF64B67B741F97A742480f822FC8a76ff87B";
          const contractInstance = new web3.eth.Contract(
            SavingsContract.abi,
        contractAddress
          );
          setContract(contractInstance);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        } catch (error) {
          console.error('Error initializing contract:', error);
        }
      }
    };

    initContract();
  }, [web3]);

  useEffect(() => {
    const fetchBalances = async () => {
      if (contract && accounts.length > 0) {
        const ethBalance = await contract.methods.getEthBalance(accounts[0]).call();
        setEthBalance(ethBalance);

        const ineBalance = await contract.methods.getIneBalance(accounts[0]).call();
        setIneBalance(ineBalance);
      }
    };

    fetchBalances();
  }, [contract, accounts]);

  const handleDeposit = async () => {
    if (contract && accounts.length > 0) {
      const amountWei = web3.utils.toWei(ethAmount, 'ether');
      await contract.methods.deposit().send({ from: accounts[0], value: amountWei }); //Deposit OKT
      // Refresh balances after the transaction
      fetchBalances();
      setEthAmount('');
    }
  };

  const handleWithdrawEth = async () => {
    if (contract && accounts.length > 0) {
      await contract.methods.withdrawEth().send({ from: accounts[0] });
      // Refresh balances after the transaction
      fetchBalances();
    }
  };

  const handleWithdrawIne = async () => {
    if (contract && accounts.length > 0) {
      await contract.methods.withdrawIne().send({ from: accounts[0] });
      // Refresh balances after the transaction
      fetchBalances();
    }
  };

  return (
    <div>
      <h1>INE Pool</h1>
      <p>OKT Balance: {web3 && web3.utils.fromWei(ethBalance, 'ether')}</p>
      <p>Ine Balance: {ineBalance}</p>
      <div>
        <label>OKT Amount:</label>
        <input type="number" value={ethAmount} onChange={(e) => setEthAmount(e.target.value)} />
        <button onClick={handleDeposit}>Deposit OKT</button>
      </div>
      <div>
        <label>Ine Amount:</label>
        <input type="number" value={ineAmount} onChange={(e) => setIneAmount(e.target.value)} />
        <button onClick={handleWithdrawIne}>Withdraw Ine</button>
      </div>
      <button onClick={handleWithdrawEth}>Withdraw OKT</button>
    </div>
  );
};

export default App;
