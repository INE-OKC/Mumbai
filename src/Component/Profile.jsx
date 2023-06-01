import React from 'react'
import searchIcon from "../assets/image/searchicon.png";
import { Link } from 'react-router-dom';
import Home from "../assets/image/ineHome.png";
import explore from "../assets/image/ineExplore.png";
import message from "../assets/image/ineMessage.png";
import profile from "../assets/image/ineProfile.png";
import savings from "../assets/image/ineSaving.png";
import bell from "../assets/image/ineBell.png";
import { BiDownArrow } from "react-icons/bi";
const Profile = () => {
  return (
    <div className='profile'>
      <div className='profilemain'>
        <div className="first">
        <div className="searches">
            <input type="text" name="" value="" placeholder="search..." />
            <img src={searchIcon} alt="" />
          </div>
          <div className="exp">
            <div>
              <img src={Home} alt="" />
              <Link to="/">Home</Link>
            </div>
            <div>
              <img src={explore} alt="" />
              <Link to="/explore">Explore</Link>
            </div>
            <div>
              <img src={message} alt="" />
              <Link to="/message">Message</Link>
            </div>
            <div>
              <img src={profile} alt="" />
              <Link to="/profile">Profile</Link>
            </div>
            <div>
              <img src={savings} alt="" />
              <Link to="/mysavings">My Savings</Link>
            </div>
            <button className="wallets" onClick={()=>{
              setTimeout(()=>{
                navigate("/connectwallet")
              }, 2000)
            }}>Connect Wallet</button>
          </div>
        </div>
        <div className="second">
          <div className='topSecond'>
            <div className="bigman">
              <p>Big Man</p>
              <span>30 post</span>
            </div>
            <div className="noti">
              <img src={bell} alt=""/>
            </div>
          </div>
          <div className='profileBg'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile