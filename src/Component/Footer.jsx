  import footerlogo from '../assets/image/INE.png';
  import Link from 'next/link';

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
        <Link href="https://pitch.com/public/2373a3ad-d6c3-4683-ad7f-aee85ad6c3d8">
  <a className="underline underline-offset-1">Pitchdeck</a>
</Link>

<Link href="https://www.twitter.com/anthonyslav1">
  <a className="underline underline-offset-1">Twitter</a>
</Link>

<Link href="https://github.com/INE-OKC/Mumbai/tree/Unity">
  <a className="underline underline-offset-1">Github</a>
</Link>

<Link href="https://www.linkedin.com/in/anthonyslav1">
  <a className="underline underline-offset-1">Meet the Project Lead</a>
</Link>

<Link href="https://wa.me/2348160276480?text=I'm%20interested%20in%20joining%20your%20INE%20team">
  <a className="underline underline-offset-1">Join our dev team</a>
</Link>

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
        <h3 className="font-semibold text-lg pb-3 md:text-xl">Resources</h3>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Support</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Blog</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Partners</a>
        </p>
        <p className="text-[0.6rem] pb-3 md:text-sm">
          <a href="/">Press</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer
