import { useState } from "react";

const CucakRowo = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImagesArray] = useState([]);
  const [toggleState, setToggleSetState] = useState(0);
  const { imageList, setImageList } = props;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);

      try {
        const response = await fetch("http://localhost:8080/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          alert(
            result.messageType === "S"
              ? "Image uploaded successfully!"
              : `Error: ${result.message}`
          );
        } else {
          alert("Error uploading image");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error uploading image");
      }
    } else {
      alert("Please select an image to upload");
    }
  };
  const handleColorSearch = async () => {
    const response = await fetch("http://localhost:8081/colorResult", {
      method: "GET",
    });
    const data = await response.json();
    var temp = [];
    console.log(data);
    console.log(data.data);
    console.log(data.result);
    for (var i = 0; i < data.data.length; i++) {
      var obj = {
        image: data.data[i],
        result: data.result[i],
      };
      temp.push(obj);
    }
    temp.sort((a, b) => b.result - a.result);
    setImageList(temp);
    console.log("isi image list");
    console.log(imageList);
  };

  const handleTextureSearch = async () => {
    const response = await fetch("http://localhost:8081/textureResult", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.data);
    console.log(data.result);
    var temp = [];
    for (var i = 0; i < data.data.length; i++) {
      var obj = {
        image: data.data[i],
        result: data.result[i],
      };
      temp.push(obj);
    }
    temp.sort((a, b) => b.result - a.result);
    setImageList(temp);
  };

  const handlerToggle = () => {
    if (toggleState == 1) {
      setToggleSetState(0);
    } else {
      setToggleSetState(1);
    }
  };

  const handleSearch = () => {
    // Handle displaying multiple images from the selectedImagesArray
    if (toggleState == 1) {
      handleColorSearch();
    } else {
      handleTextureSearch();
    }

    if (selectedImagesArray.length > 0) {
      // Display logic for multiple images
      alert(`Displaying ${selectedImagesArray.length} images`);
      // You can add logic here to display the images as needed
    } else {
      alert("Please upload at least one image before searching");
    }
  };

  return (
    <div
      className="py-20 w-full h-full border-gray-700 shadow flex flex-col justify-between "
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">
            REVERSE IMAGE SEARCH
          </p>
          <div className="flex flex-row inline-block mt-32">
            <div className=" w-3/5 mt-5 h-fit bg-black mx-16">
              {/* Display the selected image */}
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="uploaded"
                  className="ml-5 p-8 rounded-t-lg"
                />
              )}
            </div>
            <div className="flex flex-col mt-10 mx-20 w-2/5 text-white justify-center items-center text-lg">
              <div className="h-full">
                <p className="text-white font-bold my-4">Image Input</p>
                {/* Replace the anchor tag with an input type file */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold cursor-pointer"
                >
                  Insert an Image
                </label>
                {/* Add a button to trigger the image upload */}
                <button
                  onClick={handleImageUpload}
                  className="inline-block text-xl align-middle px-6 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                >
                  Upload Image
                </button>
              </div>

              <div className="h-full justify-center items-center text-center mt-32">
                <label className="relative inline-flex items-center cursor-pointer">
                  <span className="mx-3 text-sm font-medium text-white">
                    Texture
                  </span>
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={handlerToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[80px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="mx-3 text-sm font-medium text-white">
                    Color
                  </span>
                </label>
                <div className="my-2">
                  {toggleState}
                  <button
                    value={toggleState}
                    onClick={handleSearch}
                    className="inline-block text-xl align-middle px-16 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CucakRowo;

{
  /* <div className="flex flex-row">
                  <a
                    href="#"
                    className="inline-block text-xl align-middle px-6 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                    onClick={handleColorSearch}
                  >
                    Color
                  </a>
                  <a
                    href="#"
                    className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
                  >
                    Texture
                  </a>
                </div> */
}
