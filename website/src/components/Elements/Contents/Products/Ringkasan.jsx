const Ringkasan = () => {
  return (
    <div
      className="py-20 h-full border-gray-700 shadow flex flex-col justify-between"
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">
            REVERSE IMAGE SEARCH
          </p>
          <div className="flex flex-row inline-block w-full mt-32">
            <div className=" w-3/5 mt-5 h-fit bg-black mx-16">
              <img
                src="public\images\beranda.png"
                alt="logo"
                className=" ml-5 p-8 rounded-t-lg"
              />
            </div>
            <div className="flex flex-col mt-10 mx-20 w-2/5 text-white justify-center items-center text-lg">
              <div className="h-full">
                <p className="text-white font-bold my-4">Image Input</p>
                <a
                  href="#"
                  className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                >
                  Insert an Image
                </a>
              </div>
              {/* <p className="text-xl mb-20 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur. Pellentesque pharetra
                enim id aliquet dignissim. Suspendisse in ullamcorper mi. Aenean
                non imperdiet justo. Ut ac mi quis nulla venenatis lobortis a
                eget enim. Maecenas sed lacus scelerisque, elementum nisl id,
                fermentum nisi. Aenean nec purus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. purus.{" "}
              </p> */}
              <div className="h-full justify-center items-center text-center mt-32">
                <div className="flex flex-row">
                  <a
                    href="#"
                    className="inline-block text-xl align-middle px-6 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  >
                    Color
                  </a>
                  <a
                    href="#"
                    className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  >
                    Texture
                  </a>
                </div>
                <div className="my-2">
                  <a
                    href="#"
                    className="inline-block text-xl align-middle px-16 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ringkasan;
