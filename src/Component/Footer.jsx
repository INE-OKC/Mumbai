 import footerlogo from '../assets/image/INE.png'

function Footer() {
  return (
    <footer className="py-10 flex justify-between px-4 md:justify-evenly">
      <div className="flex flex-col text-white w-[35%]">
        <img src={footerlogo} alt="logo" className="w-[30%] pb-6" />
        <p className="text-[0.6rem] leading-6 md:text-sm md:leading-10">
          {" "}
          &copy; 2022 Whisk. All rights reserved Privacy Policy Terms Security
          Do Not Sell My Personal Information
        </p>
      </div>
      <div className="text-white ">
        <h3 className="font-semibold text-lg pb-3 md:text-xl">INE</h3>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">About INE </a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Web App</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Chrome Extension</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Whisk for Business</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Careers</a>
        </p>
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-lg pb-3 md:text-xl">INE Dapp</h3>
        
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
