const CoreValue = () => {
  return (
    <div
      className="w-full pb-20 bg-blue-600 border-gray-700 shadow flex flex-col justify-between"
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="text-white flex flex-row inline-block mt-8 py-2 sm:px-6 lg:px-8">
            <div className="w-1/2 mt-5 h-fit">
              <img
                src="public\images\5653f25b6cbf8669b8e22748eaf40980.png"
                alt="logo"
                className=" ml-5 p-8 rounded-t-lg"
              />
            </div>

            <div className="mt-10 mx-20 w-1/2">
              <p className="text-5xl font-bold text-justify mb-10">
                Core Values
              </p>
              <p className="text-4xl font-bold text-justify mt-20 mb-5">
                Presesi
              </p>
              <p className="text-xl mb-32 pr-24 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur. Pellentesque pharetra
                enim id aliquet dignissim.{" "}
              </p>
              <p className="text-4xl font-bold text-justify mb-5">Akselerasi</p>
              <p className="text-xl mb-20 pr-24 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur. Pellentesque pharetra
                enim id aliquet dignissim.{" "}
              </p>
              {/* <a
                href="#"
                class="inline-block text-2xl h-20 align-middle px-4 py-6 leading-none border rounded-lg text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-black font-semibold"
              >
                Download JAJAKA
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
