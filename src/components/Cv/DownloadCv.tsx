import { useState } from "react";
import { fadeIn } from "../../variants";

import { motion } from "framer-motion";
const DownloadCv = () => {
  const [language, setLanguage] = useState("az");

  const handleDownload = () => {
    let fileUrl = "";
    switch (language) {
      case "en":
        fileUrl = "/CV-Kamran(ENG).png";
        break;
      case "ru":
        fileUrl = "/CV-Kamran(RUS).png";
        break;
      case "az":
        fileUrl = "/CV-Kamran(AZE).png";
        break;
      default:
        fileUrl = "/downloads/My_Portfolio_EN.pdf";
    }

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "My_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="section px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-accent font-extrabold mb-6">
          Скачать мое Резюме
        </h2>
        <p className="mb-8 text-gray-200 text-base sm:text-lg lg:text-xl">
          Хотите больше узнать обо мне? Выберите язык и скачайте мое резюме!
        </p>
        <div className="flex flex-col items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-3 border-2 border-accent rounded-lg bg-white text-black text-sm sm:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow duration-300"
          >
            <option value="en">ENG</option>
            <option value="ru">Рус</option>
            <option value="az">AZE</option>
          </select>
          <button
            onClick={handleDownload}
            className="btn p-4 sm:p-5 text-sm sm:text-base lg:text-lg font-bold text-white  rounded-full shadow-lg hover:shadow-xl  transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Скачать портфолио
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadCv;
