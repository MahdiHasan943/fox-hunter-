import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/contact.module.css";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2ka69u",
        "template_fwlitj7",
        form.current,
        "h6sESimtLxgfYoC2K"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`${styles.ContactheroBg} relative flex py-[200px] justify-start items-center`}
    >
      <div className="md:flex w-full justify-center px-4 xl:w-[80%] mt-[100px]  mx-auto gap-6">
        <div className="w-full bg-[#C1825E] py-14 px-14 rounded-xl md:w-[50%]">
          <div className="border-[2px] py-10 px-10 border-[#bf9f1d]">
            <h1 className="text-[40px] text-center leading-[45px] md:text-[50px] md:leading-[60px]">
              Contact Us
            </h1>

            <form onSubmit={sendEmail} ref={form} action="">
              <div className="py-20">
                <input
                  type="text"
                  className="placeholder:text-[#bf9f1d] text-[#bf9f1d] placeholder:text-[22px] py-8 px-8 rounded-xl w-full bg-white"
                  placeholder="Your Name"
                  name="user_name"
                />
                <input
                  type="email"
                  className="placeholder:text-[#bf9f1d] placeholder:text-[22px] text-[#bf9f1d] py-8 px-8 rounded-xl my-10 w-full bg-white"
                  placeholder="Your Email"
                  name="user_email"
                />
                <textarea
                  className="w-full px-8 placeholder:text-[#bf9f1d] text-[#bf9f1d] rounded-xl placeholder:text-[22px] py-6 bg-white"
                  placeholder="Your words are all we need"
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                ></textarea>
                <div className="text-center pt-10">
                  <input
                    type="submit"
                    value="Send it"
                    className="text-white rounded-xl text-[20px] font-normal leading-[30px] bg-[#021222] py-10 px-10 w-[80%] "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
      <Toaster />

    </div>
  );
};

export default Contact;
