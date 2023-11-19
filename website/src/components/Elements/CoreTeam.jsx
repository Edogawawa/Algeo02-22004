import React, { useState, useEffect } from "react";

const Ndasem = (props) => {
  const [imagesVisible, setImagesVisible] = useState(false);
  const { imageList, setImageList, timeElapsed, setTimeElapsed } = props;
  const [imageSize, setImageSize] = useState(0);
  // const { correctImages, setCorrectImages } = useState([]);

  const toggleImagesVisibility = () => {
    setImagesVisible(!imagesVisible);
  };

  useEffect(() => {
    console.log("============= dari coreteamjs ===========");
    console.log(imageList);
    console.log(imageList.length);
    setImageSize(imageList.length);
  }, [imageList]);

  // useEffect(() => {
  //   const importImages = async () => {
  //     // Define the glob pattern for your images ../../../public/images/*
  //     const imageFiles = import.meta.glob(
  //       "../../../public/images/uploadDataset/*.{png,jpg,jpeg,svg, bmp}"
  //     );

  //     // Extract the image sources and alt text
  //     const imagesData = await Promise.all(
  //       Object.keys(imageFiles).map(async (key) => {
  //         console.log(key);
  //         console.log(imageFiles[key]);
  //         console.log(imageFiles[key]());
  //         const src = imageFiles[key]().default;
  //         console.log(src);
  //         const alt = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
  //         const temp = key.split("/");
  //         const ans = temp[temp.length - 1];
  //         return { ans, alt };
  //       })
  //     );

  //     setImages(imagesData);
  //   };

  //   importImages();
  // }, []);

  return (
    <div
      className="w-full border-gray-700 shadow flex flex-col justify-between justify-center items-center"
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col ">
        <div className="overflow-x-auto">
          <div className="inline-block mt-8 py-2 sm:px-6 lg:px-8 text-white">
            <div className="mt-10 mx-20 text-white text-center">
              <div className="flex flex-row justify-left">
                <p className="w-1/2 text-xl font-bold text-left">Result:</p>
                <p className="w-1/2 text-xl text-right">
                  {imageSize} Results in {timeElapsed.time} {timeElapsed.type}.
                </p>
              </div>
              {/* Toggle button to show/hide images */}
              <button
                onClick={toggleImagesVisibility}
                className="inline-block text-xl align-middle my-6 px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
              >
                {imagesVisible ? "Hide Images" : "Show Images"}
              </button>
              {imageSize}
              {imageList.map((images) => {
                images;
              })}
              {/* Display images only if imagesVisible state is true */}
              {imagesVisible && imageSize > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {/* Map over the images and render them */}
                  {imageList.map((image, index) => (
                    <div>
                      <img
                        id={image}
                        key={index}
                        src={
                          window.location.origin +
                          "/images/uploadDataset/" +
                          image.image
                        }
                        alt={image.alt}
                        className="transition duration-300 ease-in-out hover:opacity-50 py-6"
                      />
                      <p>{image.result}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="my-10 text-center text-xl font-bold">
                <p>1 | 2 | 3 | Ini pagination | 4 | 5 | 6</p>
                {/* Form for uploading dataset */}
                <form
                  action="http://localhost:8081/uploadDataset"
                  method="post"
                  encType="multipart/form-data"
                >
                  <input type="file" name="files" multiple />
                  <input
                    type="submit"
                    value="Submit"
                    className="inline-block text-xl align-middle my-6 px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ndasem;
