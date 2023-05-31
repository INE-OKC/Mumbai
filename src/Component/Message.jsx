import React from "react";
import searchIcon from "../assets/image/searchicon.png";
import Home from "../assets/image/ineHome.png";
import explore from "../assets/image/ineExplore.png";
import message from "../assets/image/ineMessage.png";
import profile from "../assets/image/ineProfile.png";
import savings from "../assets/image/ineSaving.png";
import bell from "../assets/image/ineBell.png";
import { BiDownArrow } from "react-icons/bi";
const Message = () => {
  return (
    <div className="message">
      <div className="messageMain">
        <div className="first">
          <div className="searches">
            <input type="text" name="" value="" placeholder="search..." />
            <img src={searchIcon} alt="" />
          </div>
          <div className="exp">
            <div>
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div>
              <img src={explore} alt="" />
              <p>Explore</p>
            </div>
            <div>
              <img src={message} alt="" />
              <p>Message</p>
            </div>
            <div>
              <img src={profile} alt="" />
              <p>Profile</p>
            </div>
            <div>
              <img src={savings} alt="" />
              <p>My Savings</p>
            </div>
            <button className="wallets">Connect Wallet</button>
          </div>
        </div>
        <div className="second">
          <div className="msg">
            <div>
              {" "}
              <p>Recent Messages </p> <BiDownArrow />
            </div>
            <img src={bell} alt="" />
          </div>
          <div className="singleMsg">
            <div className="imgMessage">
              <div className="Active"></div>
            </div>
            <div>
              <p>Ope</p>
              <span>
                Gee, its been good news all day. i met someone special today.
                she's really pretty.
              </span>
            </div>
          </div>
          <div className="singleMsg">
            <div className="imgMessage">
              <div className="Active"></div>
            </div>
            <div>
              <p>Ope</p>
              <span>
                Gee, its been good news all day. i met someone special today.
                she's really pretty.
              </span>
            </div>
          </div>
          <div className="singleMsg">
            <div className="imgMessage">
              <div className="Active"></div>
            </div>
            <div>
              <p>Ope</p>
              <span>
                Gee, its been good news all day. i met someone special today.
                she's really pretty.
              </span>
            </div>
          </div>
          <div className="singleMsg">
            <div className="imgMessage">
              <div className="Active"></div>
            </div>
            <div>
              <p>Ope</p>
              <span>
                Gee, its been good news all day. i met someone special today.
                she's really pretty.
              </span>
            </div>
          </div>
        </div>
        <div className="third">
          <div className="thirdTop">
          <div className="imgMessage">
              <div className="Active"></div>
            </div>
            <div>
              <p>Ope</p>
              <span>@opedesign</span>
            </div>
            <div className="borders"></div>
          </div>
          <div className="chats">
          <div className="imgMessage">
              <div className="Active"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
