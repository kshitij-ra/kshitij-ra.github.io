import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center relative">
        <h2 className="heading lg:max-w-[45vw]">
          Interested in <span className="text-purple">collaborating</span> or learning more?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center ">
          Reach out, and let&apos;s create something great together!
        </p>
        <a href="/contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="relative md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kshitij Radotra
        </p>

        <div className="flex pt-2 md:pt-0 items-center md:gap-3 gap-6">
          {socialMedia.map((info,i) => (
            <a href={info.link} target="_blank">
              <div
                key={i}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
