import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { GlobalContext } from "../Context";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = () => {
  const { email, setEmail, isValid, setIsValid } = useContext(GlobalContext);
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    AOS.init({
      once: false,
    });
    const validateEmail = () => {
      setIsValid(regexEmail.test(email));
    };
    validateEmail();
  }, [email]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!isValid) {
      Swal.fire("Error", "Email address is not valid", "error");
    }
    if (isValid) {
      setTimeout(() => {
        Swal.fire({
          title: "Subscribed!",
          text: "You have successfully subscribed to our newsletter!",
          icon: "success",
        }).then(() => {
          window.location.href = "/";
        });
      }, 1500);
    }
  };
  return (
    <form
      data-aos="fade-up-right"
      data-aos-duration="1000"
      onSubmit={submitForm}
      className="mt-20 lg:mt-36 shadow-2xl bg-[#ffbc22] mx-5 py-7  px-5 h-[494px] rounded-lg text-center max-w-4xl lg:py-10 lg:mx-auto lg:p-8 lg:h-[292px]"
    >
      <div className="pb-10">
        <h1
          className="uppercase text-3xl pb-3 font-bold lg:text-4xl"
          data-aos="flip-up"
          data-aos-duration="5000"
        >
          Seraph Festival newsletter
        </h1>
        <p
          className="font-bold lg:text-xl"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Sign up to receive latest news & exclusive offers!
        </p>
      </div>
      <div className="lg:flex lg:items-end lg:gap-6">
        <div
          className="font-black lg:mt-3 space-y-5 lg:space-y-0
         lg:space-x-4"
        >
          <input
            required
            data-aos="fade-right"
            data-aos-duration="2000"
            type="text"
            placeholder="First name"
            className="lg:p-4 p-3 w-full lg:w-auto"
          />
          <input
            data-aos="fade-left"
            data-aos-duration="2000"
            required
            type="text"
            placeholder="Last name"
            className="lg:p-4 p-3 w-full lg:w-auto"
          />
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            data-aos-duration="2000"
            data-aos="fade-up"
            placeholder="Email address"
            className="lg:p-4 p-3 w-full lg:w-auto"
          />
        </div>
        <div>
          <button
            data-aos="flip-up"
            data-aos-duration="2000"
            className="uppercase mt-5 lg:mt-0 py-3 px-5 rounded-md text-center font-black transition-all ease-in-out duration-300 cursor-pointer text-white bg-[#e25052] hover:bg-black"
          >
            subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewsLetter;
