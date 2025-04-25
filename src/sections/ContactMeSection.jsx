import React from "react";
import ContactForm from "../components/ContactForm";
import { MdOutlineEmail } from "react-icons/md";
import { FaViber, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactMeSection() {
  return (
    <div id="contact" className="py-16">
      <div className="padding-x max-container">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4 flex flex-col md:flex-row gap-y-16 lg:justify-between items-start bg-secondary rounded-md"
        >
          <div className="w-full flex flex-col items-start justify-start">
            <h2>Get in Touch</h2>
            <div className="flex flex-col items-start space-y-8">
              <div className="flex gap-4 mt-8 lg:mt-16 justify-center items-center">
                <MdOutlineEmail className="text-white" size={30} />
                <p>Landicho.rm21@gmail.com</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaViber className="text-white" size={30} />
                <p>+63-0906-207-0953</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <FaLinkedin className="text-white" size={30} />
                <p>+63-0906-207-0953</p>
              </div>
            </div>
          </div>
          <div className="w-full w-1/2">
            <ContactForm />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default ContactMeSection;
