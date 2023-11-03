const Footer = () => {
  return (
    <div
      className="w-full h-full border-gray-700 shadow flex flex-col justify-between border-t-2 border-gray-700 bg-black"
      // style={{ backgroundColor: "#28293D" }}
    >
      <div class="flex flex-col">
        <div class="overflow-x-auto mb-8">
          <p className="mt-10 text-5xl text-white font-bold text-center mb-10">
            FOOTER
          </p>
          <div class="flex flex-row inline-block mt-8 py-2 text-center justify-center">
            <div className="w-1/2 flex flex-col mt-5 h-fit">
              <div class="flex items-center flex-shrink-0 text-white justify-center">
                <img
                  class="fill-current h-8 w-8 mr-2"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  xmlns="http://www.w3.org/2000/svg"
                  src="public\images\logo_square.png"
                ></img>
                <span class="font-semibold text-3xl tracking-tight">
                  JAJAKA
                </span>
              </div>
              <div className="my-10">
                <p className="text-l text-white mx-52 text-justify">
                  Jajaka adalah ... Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Cras lobortis ipsum nec dignissim
                  consectetur. Jajaka adalah ... Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Cras lobortis ipsum nec dignissim
                  consectetur.{" "}
                </p>
              </div>
            </div>
            {/* <div className="w-1/4 mt-5 mx-8 h-fit">
              <p className="text-xl text-white my-20 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur.{" "}
              </p>
            </div>
            <div className="w-1/4 mt-5 mx-8 h-fit">
              <p className="text-xl text-white my-20 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                lobortis ipsum nec dignissim consectetur.{" "}
              </p>
            </div> */}
            <div className="w-1/2 flex flex-col mt-5 mx-8 h-fit">
              <div className="flex items-center flex-shrink-0 text-white justify-center">
                <p className="text-3xl text-white font-semibold text-center mb-10">
                  Kontak Kami
                </p>
              </div>
              <div className="">
                <p className="mb-2 text-l text-white mx-52 text-justify">
                  Jalan Kebon Bibit Barat No.29, Kelurahan Taman Sari, Kecamatan
                  Bandung Wetan, Kota Bandung{" "}
                </p>
                <p className="mb-2 text-l text-white mx-52 text-justify">
                  email@gmail.com{" "}
                </p>
                <p className="mb-2 text-l text-white mx-52 text-justify">
                  0123456789{" "}
                </p>
                <p className="mb-2 text-l text-white mx-52 text-justify">
                  <a
                    href="https://s2cities.org/blog/jajaka-connecting-youth-entrepreneurs-to-opportunities/"
                    class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10"
                  >
                    Blog S2 Cities JAJAKA
                  </a>
                </p>
              </div>
            </div>

            {/* <div className=" w-1/2 mt-5 h-fit">
                <img
                  src="public\images\Handphone-knoala.png"
                  alt="logo"
                  className=" ml-5 p-8 rounded-t-lg"
                />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
