import { useState } from "react";

const About = () => {
  
  return (
    <div
      className="py-20 w-full h-full border-gray-700 shadow flex flex-col justify-between "
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">
            About Us
          </p>
          <div className="flex flex-row inline-block mt-32  text-center justify-center items-center">
            <div className="flex flex-col mt-10 mx-20 w-2/5 text-white justify-center items-center text-lg">
              <div className="h-full justify-center items-center  text-center justify-center mt-32">
                <p>
                    lorem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;