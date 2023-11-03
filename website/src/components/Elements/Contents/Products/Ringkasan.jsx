const Ringkasan = () => {
  return (
    <div
      className="h-full border-gray-700 shadow flex flex-col justify-between"
      style={{ backgroundColor: "#28293D" }}
    >
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="flex flex-row inline-block w-full mt-8 py-2 sm:px-6 lg:px-8">
            <div className="mt-10 mx-20 w-1/2 text-white">
              <p className="text-6xl font-bold text-justify mb-10">
                LOREM IPSUM WITH JAJAKA
              </p>
              <p className="text-xl mb-20 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur. Pellentesque pharetra
                enim id aliquet dignissim. Suspendisse in ullamcorper mi. Aenean
                non imperdiet justo. Ut ac mi quis nulla venenatis lobortis a
                eget enim. Maecenas sed lacus scelerisque, elementum nisl id,
                fermentum nisi. Aenean nec purus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. purus.{" "}
              </p>
              <a
                href="#"
                class="inline-block text-2xl h-20 align-middle px-4 py-6 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 mt-4 mb-8 lg:mt-0 bg-white font-semibold"
              >
                Download JAJAKA
              </a>
            </div>

            <div className=" w-1/2 mt-5 h-fit">
              <img
                src="public\images\beranda.png"
                alt="logo"
                className=" ml-5 p-8 rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ringkasan;
