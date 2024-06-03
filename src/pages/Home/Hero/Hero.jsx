import htmlLogo from "../../../assets/icons/html.png";
import nodeLogo from "../../../assets/icons/nodejs.png";
import mongodbLogo from "../../../assets/icons/mongodb.png";
import expressjsLogo from "../../../assets/icons/expressjs.png";
import jsLogo from "../../../assets/icons//js.png";
import ReactLogo from "../../../assets/icons/react.png";
import nextjs from "../../../assets/icons/nextjs-svgrepo-com.png";
import "./Hero.css";
import { motion } from "framer-motion";
import MovingComponent from "react-moving-text";

const Hero = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const introLetters = "Hi";
  const Letters = "Ariful-Hoque";

  return (
    <div className="grBg">
      <motion.div
        className="outer-circle  shadow-md"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          variants={item}
          className="planet  shadow-lg "
          src="https://i.postimg.cc/bw4rpQxH/redux-logo-svgrepo-com.png"
          alt=""
        />

        <motion.img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          variants={item}
          className="planet-3 shadow-lg "
          src={nodeLogo}
          alt=""
        />
        <motion.img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          variants={item}
          className="planet-7 shadow-lg "
          src={ReactLogo}
          alt=""
        />
        <motion.img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          variants={item}
          className="planet-8 shadow-lg "
          src={expressjsLogo}
          alt=""
        />
        <motion.img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          variants={item}
          className="planet-4 shadow-lg "
          src={mongodbLogo}
          alt=""
        />

        <div className="inner-circle flex items-center p-5">
          <motion.div
            className="profilePhoto shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            {/* profile image */}
          </motion.div>

          <motion.img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            variants={item}
            className="planet-2 shadow-lg "
            src="https://i.postimg.cc/fbXLLJ54/typescript-official-svgrepo-com.png"
            alt=""
          />
          <motion.img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            variants={item}
            className="planet-5 shadow-lg "
            src={jsLogo}
            alt=""
          />
          <motion.img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            variants={item}
            className="planet-9 shadow-lg "
            src={nextjs}
            alt=""
          />
          <motion.img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            variants={item}
            className="planet-6  shadow-lg "
            src={htmlLogo}
            alt=""
          />
        </div>
      </motion.div>

      <div className="mt-10">
        <div className="flex justify-center gap-1">
          {introLetters.split("").map((letter, index) => (
            <MovingComponent
              key={index}
              type="swing"
              duration="1200ms"
              delay={`${index * 100}ms`}
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              <h4 className="text-center text-3xl">{letter}</h4>
            </MovingComponent>
          ))}
          <h4 className="text-center text-3xl">, my name is</h4>
        </div>
        <div className="flex justify-center">
          {Letters.split("").map((letter, index) => (
            <MovingComponent
              key={index}
              type="swing"
              duration="1000ms"
              delay={`${index * 100}ms`}
              direction="normal"
              timing="ease"
              iteration="2"
              fillMode="none"
            >
              <h2 className="uppercase font-semibold text-accent text-3xl md:text-5xl">
                {letter}
              </h2>
            </MovingComponent>
          ))}
        </div>

        <p
          data-aos="zoom-in-right"
          data-aos-offset="30"
          className=" w-11/12 lg:w-5/12 mx-auto text-center"
        >
          I’m a Front-End developer, specialized in development of web
          applications using React, Next.js, TypeScript, Redux, Mongoose,
          Node.js & more.
        </p>
      </div>
    </div>
  );
};

export default Hero;
