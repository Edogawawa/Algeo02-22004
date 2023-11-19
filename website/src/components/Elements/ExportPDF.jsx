import { useState } from "react";

const ExportPDF = () => {
  return (
    <div
      className="py-20 w-full h-full border-gray-700 shadow flex flex-col justify-between "
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="flex flex-row inline-block text-center justify-center items-center">
            <div className="flex flex-col mx-20 w-2/5 text-white justify-center items-center text-lg">
              <div className="flex flex-col items-center justify-between">
              <h3>
                Export PDF Here
              </h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40">
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPDF;
