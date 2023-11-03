import { Fragment, useState } from "react";
import Navbar from "../../components/Elements/Navbar/Navbar";
import Ringkasan from "../../components/Elements/Contents/Products/Ringkasan";
import VisiMisi from "../../components/Elements/Contents/Products/CoreTeam";
import Fitur from "../../components/Elements/Contents/Products/Fitur";
import Sponsor from "../../components/Elements/Contents/Products/Sponsor";
import Footer from "../../components/Elements/Footer/Footer";
import Carousel from "../../components/Elements/Contents/Products/Carousel";
import Testimoni from "../../components/Elements/Contents/Products/Testimoni";
// import img1 from "path-to-local-image.jpg";
// import img2 from "path-to-local-image.jpg";
// import img3 from "path-to-local-image.jpg";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const tulisan = [
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
  "awokawok",
  "awokawok",
  "awokawok",
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  // const slides = [img1, img2, img3];
  return (
    <div className="flex w-full">
      <Fragment>
        {/* <Sidebar></Sidebar> */}

        {/* <div className="flex justify-end h-20 bg-blue-500 text-white items-center px-10">
          {email}
          <Button className="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </div> */}
        {/* <div className="flex justify-end h-20 w-3/4 bg-black text-white items-center px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
          expedita unde praesentium, esse perferendis illo reprehenderit
          temporibus nam. Illo voluptatum ipsum blanditiis accusamus ut
        </div> */}
        {/* <div className="flex h-screen">
          <Navbar />
        </div> */}

        <div className="flex flex-initial justify-center items-center">
          {/* <Navbar /> */}
          <div className="flex flex-col ">
            <Navbar />
            <Ringkasan />
            <div className="overflow-x-hidden">
              <Carousel autoSlide={false} autoSlideInterval={0} className="">
                {slides.map((s) => (
                  <div
                    // ini yang ngatur lebar kumpulan box
                    className="w-full border-gray-700 shadow flex flex-col justify-between  z-0 text-white"
                    style={{ backgroundColor: "#28293D" }}
                  >
                    <div class="overflow-x-auto">
                      <div class="w-screen flex flex-row inline-block mt-8 py-2 px-10">
                        <div className="w-1/2 mt-10 mx-10">
                          <p className="text-5xl font-bold text-justify mb-10">
                            Fitur-Fitur
                          </p>
                          <p className="text-xl my-20 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras lobortis ipsum nec dignissim consectetur.
                            Pellentesque pharetra enim id aliquet dignissim.
                            Suspendisse in ullamcorper mi. Aenean non imperdiet
                            justo. Ut ac mi quis nulla venenatis lobortis a eget
                            enim. Maecenas sed lacus scelerisque, elementum nisl
                            id, fermentum nisi. Aenean nec purus. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. purus.{" "}
                          </p>
                        </div>
                        {/* <div className="w-96"></div> */}
                        <div className="w-1/2 mt-5">
                          <img
                            src={s}
                            alt="logo"
                            className="mx-2 text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <VisiMisi />
            {/* <Fitur /> */}
            <Testimoni />
            <Sponsor />
            <Footer />
          </div>
          {/* <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
        </div> */}
        </div>
      </Fragment>
    </div>
  );
};

export default ProductsPage;
