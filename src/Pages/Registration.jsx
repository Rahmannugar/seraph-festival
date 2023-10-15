import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
import BarLoader from "react-spinners/BarLoader";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Registration = () => {
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
        <div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Registration;
