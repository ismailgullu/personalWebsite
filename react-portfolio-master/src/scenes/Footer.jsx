import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-52 bg-black flex items-center">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
          <div className="flex gap-6">
            <p className="font-opensans font-bold text-8xl text-white">IG</p>
          </div>
          <div className="font-opensans font-bold flex items-end text-md text-white">
            <SocialMediaIcons className="pt-12 pr-5" />
            <p>©2022 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
