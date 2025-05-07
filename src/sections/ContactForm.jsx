import React from "react";
import ContactCard from "../components/cards/ContactCard";
import { contactList } from "../constants";
import { motion } from "framer-motion";
import ContactFormInput from "../components/ContactFormInput";

function ContactForm() {
  return (
    <div id="contact" className="py-16">
      <div className="py-4 bg-secondary">
        <section className="padding-x flex flex-col lg:flex-row lg:justify-between max-container">
          <div className="">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white"
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h6 className="text-accent mt-8 mb-2">
                Let’s Build Better Experiences
              </h6>
              <p className="max-w-[540px] lg:w-[380px]">
                I design intuitive interfaces and develop fast, responsive
                websites. Ready to bring your vision to life? Let’s talk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col justify-start items-start gap-8 pt-16"
            >
              {contactList.map((item) => (
                <ContactCard
                  key={item.label}
                  img_URL={item.img_URL}
                  label={item.label}
                />
              ))}
            </motion.div>
          </div>
          <div>
            <ContactFormInput />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
