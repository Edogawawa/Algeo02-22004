import { Fragment, useEffect } from "react";
import Navbar from "../components/Elements/Navbar";
import About from "../components/Elements/About";

const AboutUs = () => {
  return (
    <div className="flex w-full h-screen" style={{ backgroundColor: "#28293D" }}>
      <Fragment>
        <div className="flex flex-initial justify-center items-center w-full">
          <div className="flex flex-col w-full">
            <Navbar />
            <About />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default AboutUs;
