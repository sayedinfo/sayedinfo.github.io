import { profileImage } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import { person } from "../data";

const About = () => {
  const socialLink = person.social_media;
  return (
    <div className="lg:flex items-center justify-center gap-10 mt-5 lg:mt-20">
      <motion.div
        className="image flex items-center justify-center 2xl:flex-[0.22_1_0%] xl:flex-[0.3_1_0%] lg:flex-[0.4_1_0%]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="lg:w-full lg:h-auto mx-auto"
          src={profileImage}
          alt="profile picture"
        />
      </motion.div>
      <motion.div
        className="text text-theme dark:text-white 2xl:flex-[0.4_1_0%] xl:flex-[0.5_1_0%] lg:flex-[0.8_1_0%] text-center lg:text-left mt-5 lg:mt-0"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="title text-base text-theme dark:text-secondary capitalize mb-2">
          <ReactTypingEffect
            text={[
              "software engineer",
              "full stack developer",
              "front end developer",
            ]}
            eraseDelay={1000}
            typingDelay={1000}
          />
        </div>
        <div className="name text-5xl text-[#a1a1a1] dark:text-[#f5f5f5] capitalize mb-2">
          abu sayed
        </div>
        <div className="short-text text-sm text-theme dark:text-[#d5d5d5] leading-6">
          I am an experienced Full Stack Developer and React expert specializing
          in JavaScript, MongoDB, and Express JS. Having developed web and
          mobile-based applications and optimized REST API calls to improve page
          speed. I am skilled in collaborating with stakeholders to gather
          requirements and provide technical solutions. I am seeking a Full
          Stack React Developer position at a company where I can replicate my
          development and collaboration skills.
        </div>
        <div className="social-link flex items-center gap-3 my-5 justify-center lg:justify-start">
          {socialLink.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="buttons flex items-center gap-5 mt-5 justify-center lg:justify-start">
          <a
            className="bg-[#333333] text-white border-2 border-blue-400 cursor-pointer rounded-3xl px-4 py-2 hover:bg-blue-400"
            href="https://shorturl.at/oAYli"
            target="_blank"
          >
            Download CV
          </a>
          <Link
            className="bg-[#333333] text-white border-2 border-[#d5d5d5] capitalize cursor-pointer rounded-3xl px-6 py-2 hover:bg-[#d5d5d5]"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
