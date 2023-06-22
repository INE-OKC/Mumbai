  import footerlogo from '../assets/image/INE.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 flex justify-between px-4 md:justify-evenly">
      <div className="flex flex-col text-white w-[35%]">
        <img src={footerlogo} alt="logo" className="w-[30%] pb-6" />
        <p className="text-[0.6rem] leading-6 md:text-sm md:leading-10">
          {" "}
          &copy; 2023 INE. All rights reserved.
        </p>
      </div>
      <div className="text-white ">
        <h3 className="font-semibold text-lg pb-3 md:text-xl">INE</h3>
          <p className="text-[0.6rem] pb-3 md:text-sm">
        <a href="https://pitch.com/public/2373a3ad-d6c3-4683-ad7f-aee85ad6c3d8">
  Pitchdeck</a>
        </p>
  <p className="text-[0.6rem] pb-3 md:text-sm">
<a href="https://www.twitter.com/anthonyslav1">
  Twitter</a>
   </p>     
  <p className="text-[0.6rem] pb-3 md:text-sm">
<a href="https://github.com/INE-OKC/Mumbai/tree/Unity">
  Github</a>
     </p>   
  <p className="text-[0.6rem] pb-3 md:text-sm">
<a href="https://www.linkedin.com/in/anthonyslav1">
  Meet the Project Lead</a>
        </p>
  <p className="text-[0.6rem] pb-3 md:text-sm">
<a href="https://wa.me/2348160276480?text=I'm%20interested%20in%20joining%20your%20INE%20team">
  Join our dev team</a>
    </p>
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-lg pb-3 md:text-xl">INE DAPP</h3>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <Link to="Dapp">Launch Dapp</Link>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
         <Link to="safe">Save with INE</Link>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <Link to="Inenft">Become a Pro Member</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer
