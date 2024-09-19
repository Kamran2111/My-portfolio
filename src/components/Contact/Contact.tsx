import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>text</div>
          {/* form */}
          <div>
            <a
              href="mailto:racabovkamran9@gmail.com?subject=Вопрос&body=Здравствуйте"
              className="text-blue-500 underline"
            >
              Написать мне на Gmail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
