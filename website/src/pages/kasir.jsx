import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Topbar from "../components/Fragments/Topbar";
import TableKasir from "../components/Elements/Table/TableKasir";
import KananKasir from "../components/Fragments/KananKasir";
import Status from "../components/Fragments/Status";
import HorizontalTable from "../components/Elements/Table/HorizontalTable";
import Selesai from "../components/Elements/Button/selesai";

const kasir = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 100.000",
    image: "../images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
    expedita unde praesentium, esse perferendis illo reprehenderit
    temporibus nam. Illo voluptatum ipsum blanditiis accusamus ut
    reprehenderit est ad. Nihil, molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
    expedita unde praesentium, esse perferendis illo reprehenderit
    temporibus nam. Illo voluptatum ipsum blanditiis accusamus ut
    reprehenderit est ad. Nihil, molestiae? 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
    expedita unde praesentium, esse perferendis illo reprehenderit
    temporibus nam. Illo voluptatum ipsum blanditiis accusamus ut
    reprehenderit est ad. Nihil, molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
    expedita unde praesentium, esse perferendis illo reprehenderit
    temporibus nam. Illo voluptatum ipsum blanditiis accusamus ut
    reprehenderit est ad. Nihil, molestiae?`,
  },
  // {
  //   id: 2,
  //   name: "Sepatu Lama",
  //   price: "Rp 500.000",
  //   image: "../images/shoes-1.jpg",
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  // },
  // {
  //   id: 3,
  //   name: "Sepatu Dome",
  //   price: "Rp 123.000",
  //   image: "../images/shoes-1.jpg",
  //   description: `Ini adalah sepatu baru dari dome adadong`,
  // },
];

const TableData = [
  { id: 1, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 2, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 3, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 4, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 5, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 6, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 7, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 8, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
  { id: 9, Waktu: "12:00", Nominal: "Rp 100.000", Asli: "tes" },
];
const email = localStorage.getItem("email");

const KasirPage = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Lama",
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen bg-gray-200 overflow-hidden">
      <Fragment>
        <div className="flex flex-initial h-full w-1/2 justify-center items-center">
          <div className="flex flex-col h-full w-full mx-2 justify-center items-center">
            <Topbar />
            <Status />
          </div>
        </div>
        <div className="flex flex-initial w-1/2 justify-center items-center bg-white rounded-lg mx-2 my-2">
          <div className="flex flex-col h-full w-full mx-2 items-center">
            <div className="w-full ml-3">
              <p className="text-3xl font-bold my-3 text-blue-950">
                Uang Terpindai
              </p>
            </div>
            <div className="w-full mr-5 mt-6">
              {kasir.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Body title={product.name}>
                    <TableKasir />
                  </CardProduct.Body>
                </CardProduct>
              ))}
            </div>
            <div className="w-full mr-5">
              <HorizontalTable />
            </div>
            <div className="flex flex-row w-full">
              <div className="w-4/6"></div>
              <div className="w-2/6 mr-16">
                <Selesai />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default KasirPage;
