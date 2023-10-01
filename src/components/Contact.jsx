import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../assets";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pyya29",
        "template_21m2tsg",
        form.current,
        "jmdKughZZcgOd_-wL"
      )
      .then(
        (result) => {
          console.log(result.text);

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-5/6 h-full mx-auto my-20" id="contact">
      <div className="flex flex-col space-y-10 lg:flex-row md:lg:justify-evenly lg:space-x-8">
        <div className="w-3/4 lg:w-1/2 m-auto">
          <img 
            src={contact} 
            alt="contact" 
            className="w-[450px]"/>
        </div>
        <div className="w-full lg:w-1/2 bg-bmarin-transparent rounded-[30px] mx-auto">
          <div className="mb-10">
            <h1 className="text-[white] text-[25px] text-center pt-10 font-raleway">
              Contact Me
            </h1>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="">
                <label className="block font-nunito w-5/6 mx-auto text-sm leading-6 text-[white]">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="block w-5/6 mx-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-5">
                <label className="block font-nunito w-5/6 mx-auto text-sm leading-6 text-[white]">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="block w-5/6 mx-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-5">
                <label className="block font-nunito w-5/6 mx-auto text-sm leading-6 text-[white]">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-5/6 mx-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <div className="my-14">
                <button
                  type="submit"
                  className="block w-1/2 mx-auto rounded-md font-fredoka bg-custom1 py-2.5 text-center text-sm text-[white] shadow-sm hover:bg-tertiary"
                  onClick={() => {
                    alert("Gracias por comunicarte conmigo! :)");
                  }}
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
