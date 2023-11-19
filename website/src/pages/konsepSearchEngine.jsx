import { Fragment, useEffect } from "react";
import Konsep from "../components/Elements/Konsep";
import Navbar from "../components/Elements/Navbar";

const KonsepSearchEngine = () => {
  return (
    <div className="flex w-full h-screen" style={{ backgroundColor: "#28293D" }}>
      <Fragment>
        <div className="flex flex-initial justify-center items-center w-full">
          <div className="flex flex-col w-full">
            <Navbar />
            <Konsep />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default KonsepSearchEngine;
