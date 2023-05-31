import React from "react";
import searchIcon from "../assets/image/searchicon.png";
import Home from "../assets/image/ineHome.png";
import explore from "../assets/image/ineExplore.png";
import message from "../assets/image/ineMessage.png";
import profile from "../assets/image/ineProfile.png";
import savings from "../assets/image/ineSaving.png";
import bell from "../assets/image/ineBell.png";
import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
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
          <div className="mainChat">
            <div className="chats">
              <div className="imgMessage">
                <div className="Active"></div>
              </div>
              <div className="texts">
                <div>
                  <p>Ope</p> <i>42 min ago</i>
                </div>
                <span>
                  Hey there! I see you're interested in Solana, too. What got
                  you into the platform?
                </span>
                <span>Call me if you get this okay.</span>
              </div>
            </div>
            <div className="chats chat1">
              <div className="texts">
                <div>
                  <p>Me</p> <i>12 min ago</i>
                </div>
                <span>
                  Hi! Yeah, I've been following Solana for a while now. I was
                  really impressed with the platform's speed and scalability,
                  and I believe it has a lot of potential for the future.
                </span>
              </div>
              <div className="imgMessage">
                <div className="Active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
