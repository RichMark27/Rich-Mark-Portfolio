import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

function ContactFormInput() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    textBody: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "9d761ec8-6dc7-4fe9-9728-2fda657c7168");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Message sent!",
        text: "Your message has been sent successfully",
        icon: "success",
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log("Error", data);
    }
    setFormData({
      userName: "",
      userEmail: "",
      textBody: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, delay: 1.5 }}
      onSubmit={onSubmit}
      className="mx-auto p-4 flex flex-col border-2 border-[#808080] rounded-lg mt-16 gap-8 pt-16 w-full md:w-[650px] lg:w-[550px] xl:w-[600px]"
    >
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Your Name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          pattern="^[A-Za-z ]{3,16}$"
          required
          className="peer"
        />
        <span
          className={`text-red-400 invisible peer-placeholder-shown:!invisible peer-invalid:visible`}
        >
          Name should be 3-16 characters and shouldn't include any special
          character!
        </span>
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
          className="peer"
        />
        <span
          className={`text-red-400 invisible peer-placeholder-shown:!invisible peer-invalid:visible`}
        >
          It should be a valid email address!
        </span>
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder="Share your thoughts"
          name="textBody"
          value={formData.textBody}
          onChange={handleChange}
          className="peer"
        />
      </div>

      <motion.button
        type="submit"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="font-lg font-semibold bg-accent text-white py-4 w-[240px] mx-auto rounded-lg cursor-pointer"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

export default ContactFormInput;
