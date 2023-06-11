import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Signin from "./Component/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import MySavings from "./Component/MySavings";
import Explore from "./Component/Explore";
import Message from "./Component/Message";
import ConnectWallet from "./Component/ConnectWallet";
import Profile from "./Component/Profile";
import Safe from "./Component/Safe";
import { Dapp } from "./Component/Dapp";
import { Inenft } from "./Component/IneNft";
import "./styles/globals.css";
function App() {
  return (
    <div className="bg-black h-full">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="signin" element={<Signin />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mysavings" element={<MySavings />} />
        <Route path="explore" element={<Explore />} />
        <Route path="/message" element={<Message />} />
        <Route path="connectwallet" element={<ConnectWallet />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/Dapp" element={<Dapp />} />
        <Route path="/Inenft" element={<Inenft />} />
      </Routes>
    </div>
  );
}

export default App;
