import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from "./pages/login.jsx";
// import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
// import KasirPage from "./pages/kasir";
// import Aktivitas from "./pages/Aktivitas/aktivitas";
// import TentangKami from "./pages/TentangKami/tentangKami";
// import FileUpload from "./pages/FileUpload";
import HowToUsePage from "./pages/howToUse.jsx";
import KonsepSearchEngine from "./pages/konsepSearchEngine.jsx";
import PagingApp from "./PagingApp.jsx";
import "bootstrap/dist/css/bootstrap.css"
import AboutUs from "./pages/aboutUs.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/paging",
    element: <PagingApp />,
  },
  {
    path: "/howToUse",
    element: <HowToUsePage />,
  },
  {
    path: "/konsep",
    element: <KonsepSearchEngine />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
