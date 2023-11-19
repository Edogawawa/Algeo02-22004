import { Fragment, useEffect } from "react";
import Howto from "../components/Elements/Howto";
import Navbar from "../components/Elements/Navbar";

const HowToUsePage = () => {
  return (
    <div className="flex w-full h-screen" style={{ backgroundColor: "#28293D" }}>
      <Fragment>
        <div className="flex flex-initial justify-center items-center w-full">
          <div className="flex flex-col w-full">
            <Navbar />
            <Howto />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default HowToUsePage;
