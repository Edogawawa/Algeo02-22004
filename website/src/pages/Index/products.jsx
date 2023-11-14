import { Fragment } from "react";
// import Navbar from "../../components/Elements/Navbar/Navbar";
import Ringkasan from "../../components/Elements/Contents/Products/Ringkasan";
import VisiMisi from "../../components/Elements/Contents/Products/CoreTeam";

const ProductsPage = () => {
  return (
    <div className="flex w-full">
      <Fragment>
        <div className="flex flex-initial justify-center items-center">
          <div className="flex flex-col ">
            <Ringkasan />
            <div className="overflow-x-hidden"></div>
            <VisiMisi />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default ProductsPage;
