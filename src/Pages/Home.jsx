import React, { useContext, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import { GlobalContext } from "../Context";
const Navbar = React.lazy(() => import("../Components/Navbar"));
const Carousel = React.lazy(() => import("../Components/Carousel"));
const Timer = React.lazy(() => import("../Components/Timer"));
const EventList = React.lazy(() => import("../Components/EventList"));
const NewsLetter = React.lazy(() => import("../Components/NewsLetter"));
const Footer = React.lazy(() => import("../Components/Footer"));

const Home = () => {
  const { loading, setLoading } = useContext(GlobalContext);
  const { hidden } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
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
        <div className="m-auto">
          <Carousel />
          <Timer />
          <EventList />

          <div className="text-center mt-20 lg:w-[1000px] md:mx-auto md:grid md:grid-cols-2 md:gap-4 ">
            <a href="/event">
              <h2 className="font-bold text-xl lg:text-3xl bg-purple-900 hover:bg-purple-600 duration-200 ease-in-out mt-10 py-5 md:py-8 text-white mx-5 md:mx-7 rounded-xl shadow-2xl">
                Events{" ->"}
              </h2>
            </a>
            <a href="/register">
              <h2 className="font-bold text-xl lg:text-3xl bg-purple-900 hover:bg-purple-600 duration-200 ease-in-out mt-10 py-5 md:py-8 text-white mx-5 md:mx-7 rounded-xl shadow-2xl">
                Register{" ->"}
              </h2>
            </a>
            <a href="/about">
              <h2 className="font-bold text-xl lg:text-3xl bg-purple-900 hover:bg-purple-600 duration-200 ease-in-out mt-10 py-5 md:py-8 text-white mx-5 md:mx-7 rounded-xl shadow-2xl">
                About Seraph Festival{" ->"}
              </h2>
            </a>
            <a href="https://www.twitter.com/NugarRahman">
              <h2 className="font-bold text-xl lg:text-3xl bg-purple-900 hover:bg-purple-600 duration-200 ease-in-out mt-10 py-5 md:py-8 text-white mx-5 md:mx-7 rounded-xl shadow-2xl">
                Community{" ->"}
              </h2>
            </a>
          </div>

          <NewsLetter />
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
