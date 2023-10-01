import { sonic, ring } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-primary w-full h-full mt-32">
      <div className="h-[100px] pt-6">
        <div className="w-full flex items-center justify-evenly">
          <img src={sonic} 
          alt=""
          className="w-14" />
          <img src={ring} 
          alt=""
          className="w-10" />
          <img src={ring} 
          alt=""
          className="w-10" />
          <img src={ring} 
          alt=""
          className="w-10" />
          <img src={ring} 
          alt=""
          className="w-10" />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="text-center text-[white] p-3">
        © 2023
        <a className="text-[white]" href="https://mdbootstrap.com/">
          Lucas Albornoz | Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
