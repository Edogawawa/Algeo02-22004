import { useState } from "react";

const ExportPDF = (props) => {
  const {imageList, setImageList} = props;

  const handleExportPdf = async () => {
    try {
      const response = await fetch('http://localhost:8081/exportPdf', {
        method: "GET",
      });
      
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Get the filename from the Content-Disposition header
      response.headers.forEach(console.log);
      const contentDisposition = response.headers.get('content-disposition');
      // console.log(response.headers.get('content-disposition'))
      const filename = contentDisposition
        ? contentDisposition.split('filename=')[1]
        : 'downloaded-file.pdf';

      // Convert the response blob to a Blob object
      const blob = await response.blob();
      console.log(filename)
      // Create a link and trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

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
                <button 
                onClick={handleExportPdf}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40">
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
