import React from "react";
import img from "../../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row  lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:leading-[1] lg:text-[110px]"
            >
              Камран <span>Раджабов</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="mb-6 mt-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">Я</span>
              <TypeAnimation
                sequence={["РАЗРАБОТЧИК", 2000, "ДИЗАЙНЕР", 2000]}
                speed={1}
                className="text-accent "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              odio voluptatem dolores aspernatur reiciendis obcaecati laudantium
              assumenda, suscipit eveniet illum!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Свяжитесь со мной</button>
              <a href="#" className="text-gradient btn-link">
                Мое портфолио
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 1.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Kamran2111" target="blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kamran-racabov-572784261/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://t.me/Tommy1449" target="blank">
                <FaTelegram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] max-w-[482px]"
          >
            <img src={img} alt="My Photo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
