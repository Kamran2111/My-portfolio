import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* Image block */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* Content block */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-accent mb-4">👩‍💻 Обо мне</h2>
            <p className="text-base md:text-sm mb-4">
              Я начинающий Frontend разработчик с большим интересом к
              программированию и созданию инновационных веб-приложений. Моя
              страсть к компьютерам началась с детства, и сейчас я активно
              изучаю современные технологии.
            </p>

            <h3 className="text-2xl font-semibold text-accent mb-4">
              🚀 Мой путь в IT
            </h3>
            <p className="text-base md:text-sm mb-6">
              Мое обучение началось в Step IT Academy, где я прошел интенсивные
              курсы по программированию. Сейчас я продолжаю углублять свои
              знания в Frontend разработке, осваивая такие технологии, как HTML,
              CSS, SASS, Tailwind CSS, Bootstrap, JavaScript, React, TypeScript
              и Vite.
            </p>

            <h4 className="hidden sm:block text-xl font-semibold text-accent mb-4">
              🎯 Мои цели
            </h4>
            <p className="hidden sm:block text-base md:text-sm mb-6">
              Стремлюсь стать экспертом в Frontend разработке и расширить свои
              навыки до уровня Fullstack разработчика. Постоянно учусь и ищу
              новые вызовы и проекты, которые помогут мне развиваться.
            </p>

            <ul className="hidden sm:block list-disc pl-5 mb-2 text-base md:text-sm">
              <li>
                Разработка веб-приложений с использованием React и TypeScript
              </li>
              <li>Создание адаптивных интерфейсов с помощью Tailwind CSS</li>
              <li>Опыт работы с Redux для управления состоянием</li>
              <li>Командная работа в GitHub</li>
            </ul>

            {/* CountUp section */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] md:text-[24px] font-bold text-gradient mb-4">
                  {inView ? <CountUp start={0} end={10} duration={5} /> : null}
                </div>
                <div className="text-sm font-medium tracking-[2px]">
                  месяцев <br /> обучения
                </div>
              </div>

              <div>
                <div className="text-[40px] md:text-[24px] font-bold text-gradient mb-4">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className="text-sm font-medium tracking-[2px]">
                  завершенных <br /> проектов
                </div>
              </div>

              <div>
                <div className="text-[40px] md:text-[24px] font-bold text-gradient mb-4">
                  {inView ? <CountUp start={0} end={10} duration={5} /> : null}
                </div>
                <div className="text-sm font-medium tracking-[2px]">
                  изученных <br /> технологий
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Свяжитесь со мной</button>
              <a href="#" className="text-gradient btn-link">
                Мое портфолио
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
