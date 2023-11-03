import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="z-10 w-full flex items-center justify-between flex-wrap p-6 sticky top-0 border-b-2 border-gray-700 bg-black"
      // style={{ backgroundColor: "#28293D" }}
    >
      <div class="flex items-center flex-shrink-0 text-white">
        <img
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
          src="public\images\logo_square.png"
        ></img>
        <span class="font-semibold text-3xl tracking-tight">JAJAKA</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto text-white">
        <div class="text-xl mr-5 lg:flex-grow font-bold ">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10"
          >
            Beranda
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10"
          >
            Tentang Kami
          </a>
          
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10"
          >
            Aktivitas
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-xl px-3 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 bg-white font-semibold"
          >
            Download JAJAKA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
