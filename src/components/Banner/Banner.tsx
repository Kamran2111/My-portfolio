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
              className="mb-3 max-w-lg mx-auto lg:mx-0"
            >
              Я занимаюсь созданием интерактивных и современных веб-приложений,
              сочетающих стильный дизайн и передовые технологии. Моя цель —
              разрабатывать удобные и привлекательные интерфейсы, которые делают
              использование сайта простым и приятным. Я постоянно совершенствую
              свои навыки, чтобы предлагать свежие и инновационные решения в
              каждой новой разработке.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex items-center max-w-max gap-x-6 mb-4 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a href="#contact">Свяжитесь со мной</a>
              </button>
              <a href="#work" className="text-gradient btn-link">
                Мое портфолио
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 1)}
              initial="hidden"
              animate="show"
              whileInView="show"
              viewport={{ once: false }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mt-0"
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
            className="flex-1 bg-banner bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
