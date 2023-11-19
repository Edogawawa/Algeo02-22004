import { Fragment, useEffect } from "react";
// import Navbar from "../../components/Elements/Navbar/Navbar";
import CucakRowo from "../components/Elements/Atas";
import Ndasem from "../components/Elements/Tengah";
import { useState } from "react";
import BonusScrapping from "../components/Elements/BonusScrapping";
import Navbar from "../components/Elements/Navbar";
import { Button } from "bootstrap";
import ExportPDF from "../components/Elements/ExportPDF";

const ProductsPage = () => {
  // const slides = [img1, img2, img3];
  const [imageList, setImageList] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    console.log("ini dari product.jsx ================");
    console.log(imageList);
  }, [imageList]);

  return (
    <div className="flex w-full" style={{ backgroundColor: "#28293D" }}>
      <Fragment>
        <div className="flex flex-initial justify-center items-center w-full">
          <div className="flex flex-col w-full">
            <Navbar />
            <CucakRowo
              imageList={imageList}
              setImageList={setImageList}
              timeElapsed={timeElapsed}
              setTimeElapsed={setTimeElapsed}
            />
            <Ndasem
              imageList={imageList}
              setImageList={setImageList}
              timeElapsed={timeElapsed}
              setTimeElapsed={setTimeElapsed}
            />
            <BonusScrapping
              imageList={imageList}
              setImageList={setImageList}
              timeElapsed={timeElapsed}
              setTimeElapsed={setTimeElapsed}
            />
            
            <ExportPDF 
              imageList={imageList}
              setImageList={setImageList}
            />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default ProductsPage;
