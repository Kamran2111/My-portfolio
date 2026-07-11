import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import gmailImg from "../../assets/gmail-icon.svg";

const Contact = () => {
  return (
    <section className="section py-16 lg:py-24" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h4 className="text-xl lg:text-2xl uppercase text-accent font-semibold mb-4 tracking-wider">
              Свяжитесь с нами
            </h4>
            <h2 className="text-4xl lg:text-[80px] font-bold leading-tight lg:leading-none mb-8">
              Давайте работать <br /> вместе!
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 mb-8">
              Мы всегда открыты для новых проектов и идей. Не стесняйтесь
              связаться с нами, чтобы обсудить детали.
            </p>
          </motion.div>
          {/* contact options */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-white shadow-lg rounded-lg p-8 lg:p-12 border-t-4 border-accent"
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Как связаться со мной
            </h3>
            <div className="flex items-center gap-x-4 mb-6">
              <img src={gmailImg} alt="Gmail" className="w-10 h-10" />
              <a
                href="mailto:racabovkamran9@gmail.com"
                className="text-lg lg:text-xl text-gradient font-semibold"
              >
                Написать мне на Gmail
              </a>
            </div>
            <div className="mb-6">
              <h5 className="text-xl font-semibold text-gray-700 mb-2">
                Мой номер
              </h5>
              <a
                className="text-2xl font-bold text-gradient"
                href="tel:+994517960269"
              >
                +994 (50) 441-16-42
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
