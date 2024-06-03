import "./custom.css";
import htmlLogo from "../../../assets/icons/html.png";
import cssLogo from "../../../assets/icons/css-3.png";
import nodeLogo from "../../../assets/icons/nodejs.png";
import mongodbLogo from "../../../assets/icons/mongodb.png";
import expressjsLogo from "../../../assets/icons/expressjs.png";
import jsLogo from "../../../assets/icons//js.png";
import ReactLogo from "../../../assets/icons/react.png";

import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const Skills = () => {
  return (
    <div className="px-3 md:px-20 lg:px-60  my-40 relative">
      <h2
        data-aos="fade-right"
        data-aos-duration="2000"
        className="text-center md:text-left text-3xl md:text-5xl font-bold mb-5"
      >
        My Skills
      </h2>
      <p
        data-aos="fade-left"
        data-aos-duration="2000"
        className="text-center md:text-left"
      >
        My React front-end expertise delivers exceptional results. Proficient in
        ReactJS and modern front-end technologies, I bring a fresh perspective
        to projects. Adaptable and innovative, I consistently deliver
        high-quality work, striving for excellence in every aspect of web
        development.
      </p>

      <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mt-5 gap-5">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="p-5 flex  justify-center items-center  rounded-3xl  shadow shadow-blue-500/20"
        >
          <div className=" flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              HTML 5
            </div>
            <img className="w-16 m-auto" src={htmlLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              CSS 3
            </div>
            <img className="w-16 m-auto" src={cssLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Next Js
            </div>
            <img
              className="w-16 m-auto"
              src="https://i.postimg.cc/RCgqF3K8/nextjs-svgrepo-com.png"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Redux
            </div>
            <img
              className="w-16"
              src="https://i.postimg.cc/bw4rpQxH/redux-logo-svgrepo-com.png"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Type Script
            </div>
            <img
              className="w-16  m-auto"
              src="https://i.postimg.cc/fbXLLJ54/typescript-official-svgrepo-com.png"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Java Script
            </div>
            <img className="w-16  m-auto" src={jsLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="p-5 flex justify-center  rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              React
            </div>
            <img className="w-16  m-auto" src={ReactLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Express Js
            </div>
            <img className="w-16 m-auto" src={expressjsLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="flip-down"
          data-aos-duration="2000"
          className="p-5 flex justify-center   rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Node Js
            </div>
            <img className="w-16 m-auto" src={nodeLogo} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="p-5 flex justify-center  rounded-3xl duration-500 shadow shadow-blue-500/20"
        >
          <div className="flex-row justify-center items-center">
            <div className="md:text-sm lg:text-lg mb-2 text-center font-bold">
              Mongo Db
            </div>
            <img className="w-16 m-auto" src={mongodbLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
