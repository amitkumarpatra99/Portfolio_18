import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaIndianRupeeSign } from "react-icons/fa6";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nybaakp", //Service ID
        "template_iiffbgd",  //Template ID
        form.current,
        "qnUAcjHnJ95NecfDA" //Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] " >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">CONTACT</h2>
        <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-2  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>
        <p className="text-gray-400 mt-3 text-lg font-semibold">
          Feel free to get in touch—I’m eager to explore
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-4 w-full max-w-md bg-[#0d081f] p-6 rounded-lg  border border-[#4FB7B3] shadow-2xl overflow-hidden  hover:shadow-[#4FB7B3] transition-transform duration-300"
        style={{
          background: 'linear-gradient(180deg, #042C33, #0E1314 )',
        }}>
        <h3 className="text-xl font-semibold text-white text-center cursor-default">
          Connect With Me <span className="ml-1">📞</span>  </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4 ">
          <input type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:border-[#4FB7B3]  transition-all duration-300 hover:scale-105" />

          <input type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:border-[#4FB7B3]  transition-all duration-300 hover:scale-105" />

          <input type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:border-[#4FB7B3]  transition-all duration-300 hover:scale-105" />

          <textarea name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:border-[#4FB7B3]  transition-all duration-300 hover:scale-105" />


          <button type="submit" className="w-full bg-gradient-to-l from-[#4FB7B3] to-blue-900 py-3 text-white font-semibold rounded-md hover:opacity-80 transition">Send
          </button>

          <span className=" w-full items-center justify-center text-center bg-gradient-to-l from-[#4FB7B3] to-blue-900 py-3 text-white font-semibold rounded-md hover:opacity-80 transition">

            <a href="https://rzp.io/rzp/amitpatra"
              target="_blank"
              rel="noopener noreferrer">
              <FaIndianRupeeSign size={22} className="  w-full" />
            </a>
          </span>

        </form>
      </div>
    </section >
  );
};

export default Contact;
