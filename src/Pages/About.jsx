import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
const Navbar = React.lazy(() => import("../Components/Navbar"));
const Footer = React.lazy(() => import("../Components/Footer"));
import BarLoader from "react-spinners/BarLoader";
import about from "../images/BCF_2023_Sunday_WR-648-Dominic-Mould-342-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { loading, setLoading } = useContext(GlobalContext);
  const { hidden } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init();
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
    <div className="overflow-hidden">
      <Navbar />
      {hidden ? (
        <div>
          <div className="lg:py-20 py-5 md:mx-6 lg:mx-10 xl:mx-20 md:flex md:space-x-7 lg:space-x-10 xl:space-x-20 md:items-center">
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              className="md:h-[600px] md:py-5 md:rounded-lg"
              src={about}
              alt="about"
            />
            <div className="text-center px-5 pt-10">
              <div
                className="mb-5"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1 className="font-black text-2xl leading-5  bg-[#9934F1] py-7 text-white">
                  Our Mission:
                </h1>
                <p className="font-light  italic bg-black text-white py-7 px-5">
                  At Seraph Christian Festival, our mission is to create a
                  sacred space for all to come together and deepen their faith
                  while fostering a strong sense of community. We aim to inspire
                  and uplift through the transformative power of Christian
                  values and fellowship.
                </p>
              </div>
              <div
                className="mt-10"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1 className="font-black text-2xl leading-5  bg-[#9934F1] py-7 text-white">
                  Our Heritage:
                </h1>
                <p className="font-light italic bg-black text-white py-7 px-5">
                  The Seraph Christian Festival has a rich history of nurturing
                  spiritual growth and connection among believers. Since our
                  inception in 2016, we have been a beacon of faith, providing a
                  platform for worship, reflection, and renewal.
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-center md:px-48 md:mt-20 px-5 max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="font-black text-2xl leading-5 py-7 bg-[#9934F1] text-white">
              What We Offer:
            </h1>
            <ul className=" bg-black text-white py-10 px-5">
              <li className="py-3">
                <strong>Worship and Reflection:</strong> Our festival provides a
                sacred atmosphere for worship, prayer, and reflection. We offer
                a diverse range of spiritual activities to cater to all ages and
                denominations.
              </li>
              <li className="py-3">
                <strong> Community and Fellowship:</strong> Seraph is not just
                an event; it's a family. We encourage believers to come
                together, strengthen their bonds, and grow in faith through the
                support of the Christian community.
              </li>
              <li className="py-3">
                <strong> Service and Outreach:</strong> We are committed to
                serving our community and beyond. Our festival often includes
                opportunities for charitable activities and outreach projects.
              </li>
            </ul>
            <p
              className="font-bold text-xl mt-10"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Join Us: Seraph Christian Festival is a place where you can deepen
              your faith, connect with fellow believers, and find spiritual
              renewal. We invite you to join us on this sacred journey.
            </p>
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
