import React from "react";
import ContactCard from "../components/cards/ContactCard";
import { contactList } from "../constants";
import { motion } from "framer-motion";

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
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 1.5 }}
              action=""
              className="mx-auto p-4 flex flex-col border-2 border-[#808080] rounded-lg mt-16 gap-8 pt-16 w-full md:w-[650px] lg:w-[550px] xl:w-[600px]"
            >
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Your Email" required />
              <textarea
                className="text-gray-500 text-lg outline-none border-2 rounded-lg h-[350px] p-2"
                placeholder="Share your thoughts"
                required
              />

              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="font-lg font-semibold bg-accent text-white py-4 w-[240px] mx-auto rounded-lg"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
