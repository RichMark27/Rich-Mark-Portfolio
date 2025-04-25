import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <div className="rounded-md h-full w-full border-[#808080] border-1">
      <form
        action=""
        className="flex w-full flex-col p-8 lg:p-16 text-lg text-white space-y-8 "
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className=" border-b-1 border-[#808080] focus:outline-none p-1"
        />
        <input
          type="text"
          placeholder="Your Email"
          required
          className="border-b-1 border-[#808080] focus:outline-none p-1"
        />
        <textarea
          type="text"
          placeholder="Share your thoughts"
          required
          className="border-1 border-[#808080] focus:outline-none p-1 rounded-md h-[300px]"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="px-2 py-4 cursor-pointer bg-primary w-50 rounded-lg mx-auto font-semibold"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}

export default ContactForm;
