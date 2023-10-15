import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import BarLoader from "react-spinners/BarLoader";
import Swal from "sweetalert2";
import axios, { Axios } from "axios";
const Navbar = React.lazy(() => import("../Components/Navbar"));
const Footer = React.lazy(() => import("../Components/Footer"));

const Registration = () => {
  const {
    hidden,
    loading,
    setLoading,
    isValid,
    setIsValid,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
  } = useContext(GlobalContext);

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const countryUrl = "https://restcountries.com/v3.1/all";
  const registerUrl = "https://seraphfestival-backend.onrender.com/register";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);

    axios
      .get(countryUrl)
      .then((res) => {
        //console.log(res.data[0].name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const validateEmail = () => {
      setIsValid(regexEmail.test(email));
    };
    validateEmail();
  }, [email]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValid) {
      Swal.fire("Error", "Email address is not valid", "error");
    }
    if (isValid) {
      const body = { firstname, lastname, email };
      axios
        .post(registerUrl, body)
        .then((res) => {
          //console.log(res.data.msg);
          setTimeout(() => {
            Swal.fire({
              title: "Subscribed!",
              text: res.data.msg,
              icon: "success",
            }).then(() => {
              window.location.href = "/";
            });
          }, 1500);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  if (loading) {
    return (
      <div
        id="loader"
        className="text-center flex items-center justify-center w-full h-screen"
      >
        <BarLoader color="purple" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {hidden ? (
        <div>
          <section className="text-black mt-10 xl:mt-24 xl:mb-40">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full border-2 rounded-lg shadow :border md:mt-0 sm:max-w-md xl:p-0 :bg-gray-800 :border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Registration form
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                        placeholder="John"
                        required
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                        placeholder="Doe"
                        required
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
                        Select Gender:
                      </label>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
                        Select Country:
                      </label>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
                        <option value="">Select Country</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                        placeholder="name@email.com"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 :bg-gray-700 :border-gray-600 :focus:ring-primary-600 :ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light text-gray-500 :text-gray-300"
                        >
                          I accept the Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={handleRegister}
                      className="w-full bg-purple-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800"
                    >
                      Register
                    </button>
                    <p className="text-sm font-light text-gray-500 :text-gray-400">
                      Already registered?
                      <a
                        href="/event"
                        className="font-medium text-primary-600 hover:underline :text-primary-500"
                      >
                        Check our upcoming events
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Registration;
