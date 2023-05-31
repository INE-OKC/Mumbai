import bellpic from '../assets/image/bellicon.png'
import questionicon from '../assets/image/questionmark.png'
import walletpic from '../assets/image/walletsavings.png'
import overviewpic from '../assets/image/overviewsavings.png'
import solpic from '../assets/image/solsavings.png'
import shoppingicon from '../assets/image/shopping-cart.png'
import flashicon from '../assets/image/flash.png'
import arrowicon from '../assets/image/arrow-left.png'
import bigmanpic from '../assets/image/bigman.png'
import ConnectWallet from './ConnectWallet'
import { Link } from 'react-router-dom'

function MySavings() {
  return (
    <div className="md:flex md:flex-row-reverse">
      <div className="pb-[15%] md:mr-[1%] md:w-[70%] md:h-screen">
        <div className="flex justify-between py-3 pl-2">
          <div className="flex">
            <div>
              <button>
                <Link href="/dashboard">
                  <img src={arrowicon} alt="arrow" className="inline w-[60%]" />
                </Link>
              </button>
            </div>
            <div className="ml-2">
              <h3 className="text-white text-sm">Your savings dashboard</h3>
              <p className="text-search-text text-[0.6rem]">
                See your progress and earnings in one place!
              </p>
            </div>
          </div>
          <div className="pt-2 w-[5.5rem] md:w-[7rem]">
            <span>
              <a href="/">
                <img
                  src={bellpic}
                  alt="bellicon"
                  className="inline w-[15%] mr-2 "
                />
              </a>
            </span>
            <span>
              <a href="/">
                <img
                  src={questionicon}
                  alt="questionmark"
                  className="inline w-[15%] mr-2"
                />
              </a>
            </span>
            <span>
              <img src={bigmanpic} alt="pic" className="inline w-[25%] md:w-[30%]" />
            </span>
          </div>
        </div>
        <div className="">
          <div className="md:flex md:w-[65%]">
            <img src={walletpic} alt="pic" />
            <img src={overviewpic} alt="pic" className="w-[100%] md:w-[50%]" />
          </div>
          <div className="px-4 pt-4 md:flex">
            <div>
              <h4 className="text-white text-lg pb-5 md:text-base">
                Welcome to your Sol savings dashboard!
              </h4>
              <p className="text-search-text pb-4 md:text-sm">
                Here you can track your progress and earnings from saving SOL ;
              </p>
              <ul className="list-disc ml-6 mb-3 md:mb-4">
                <li className="text-search-text mb-3 text-sm md:text-xs">
                  You can also withdraw your saved SOL or Ine tokens at any time
                  by clicking on the "Withdraw" button.
                </li>
                <li className="text-search-text text-sm md:text-xs">
                  To continue saving SOL and earning Ine tokens, simply click on
                  the "Save More SOL" button below.
                </li>
              </ul>
              <div className="pb-3">
                <button className="text-white text-xs px-4 py-1 ml-2 rounded-md bg-gradient-to-r from-sol-first to-sol-second md:py-3">
                  <a href="/">Save More SOL</a>
                  <span>
                    <img
                      src={shoppingicon}
                      alt="icon"
                      className="inline w-[20%] ml-2"
                    />
                  </span>
                </button>
                <button className="text-white text-xs px-4 py-1 ml-2 rounded-md border-search-text border  md:py-3">
                  <a href="/">Withdraw</a>
                  <span>
                    <img
                      src={flashicon}
                      alt="flashicon"
                      className="inline w-[20%] ml-2"
                    />
                  </span>
                </button>
              </div>
            </div>
            <img src={solpic} alt="img" className="hidden md:inline w-[30%]" />
          </div>
        </div>
      </div>
      <div className="md:fixed md:left-0 md:w-[23.7%]">
        <ConnectWallet />
      </div>
    </div>
  );
}

export default MySavings