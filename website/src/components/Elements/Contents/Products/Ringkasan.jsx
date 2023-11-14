import { useState } from "react";

const Ringkasan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
          alert(result.messageType === "S" ? "Image uploaded successfully!" : `Error: ${result.message}`);
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

  return (
    <div className="py-20 h-full border-gray-700 shadow flex flex-col justify-between" style={{ backgroundColor: "#28293D" }}>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">REVERSE IMAGE SEARCH</p>
          <div className="flex flex-row inline-block w-full mt-32">
            <div className=" w-3/5 mt-5 h-fit bg-black mx-16">
              {/* Display the selected image */}
              {selectedImage && (
                <img src={URL.createObjectURL(selectedImage)} alt="uploaded" className="ml-5 p-8 rounded-t-lg" />
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
                {/* ... rest of the code ... */}
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


// const Ringkasan = () => {
//   return (
//     <div
//       className="py-20 h-full border-gray-700 shadow flex flex-col justify-between"
//       style={{ backgroundColor: "#28293D" }}
//     >
//       <div className="flex flex-col">
//         <div className="overflow-x-auto">
//           <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">
//             REVERSE IMAGE SEARCH
//           </p>
//           <div className="flex flex-row inline-block w-full mt-32">
//             <div className=" w-3/5 mt-5 h-fit bg-black mx-16">
//               <img
//                 src="public\images\beranda.png"
//                 alt="logo"
//                 className=" ml-5 p-8 rounded-t-lg"
//               />
//             </div>
//             <div className="flex flex-col mt-10 mx-20 w-2/5 text-white justify-center items-center text-lg">
//               <div className="h-full">
//                 <p className="text-white font-bold my-4">Image Input</p>
//                 <a
//                   href="#"
//                   className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
//                 >
//                   Insert an Image
//                 </a>
//               </div>
//               <div className="h-full justify-center items-center text-center mt-32">
//                 <div className="flex flex-row">
//                   <a
//                     href="#"
//                     className="inline-block text-xl align-middle px-6 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
//                   >
//                     Color
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-block text-xl align-middle px-6 py-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
//                   >
//                     Texture
//                   </a>
//                 </div>
//                 <div className="my-2">
//                   <a
//                     href="#"
//                     className="inline-block text-xl align-middle px-16 py-2 mx-2 leading-none border rounded-lg text-black border-white hover:border-transparent hover:text-white hover:bg-yellow-500 bg-white font-semibold"
//                   >
//                     Search
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ringkasan;
