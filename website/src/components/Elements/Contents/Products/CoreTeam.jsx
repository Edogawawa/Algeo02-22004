const VisiMisi = () => {
  return (
    <div
      className="w-full border-gray-700 shadow flex flex-col justify-between"
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block mt-8 py-2 sm:px-6 lg:px-8 text-white">
            <div className="mt-10 mx-20 text-white">
              <div className="flex flex-row justify-left">
                <p className="w-1/2 text-xl font-bold text-left">Result:</p>
                <p className="w-1/2 text-xl text-right">
                  ... Results in ... seconds.
                </p>
              </div>
              <div className="columns-3 gap-4">
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6"
                />
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6 "
                />
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6 "
                />
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6 "
                />
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6 "
                />
                <img
                  src="public\images\shoes-1.jpg"
                  alt="logo"
                  className="transition duration-300 ease-in-out hover:opacity-50 py-6 "
                />
              </div>
              <div className="my-10 text-center text-xl font-bold">
                <p>1 | 2 | 3 | Ini pagination | 4 | 5 | 6</p>
                <a
                  href="#"
                  className="inline-block text-xl align-middle mx-2 my-6 px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                >
                  Upload Dataset
                </a>
                <a
                  href="#"
                  className="inline-block text-xl align-middle mx-2 my-6 px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                >
                  Image Scraping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
