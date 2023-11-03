import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div
      // ini kunci lebar screen
      // biar nggak mbledos
      className="w-screen h-full border-gray-700 shadow justify-between overflow-x-hidden flex flex-row relative inline-block py-5"
      style={{ backgroundColor: "#28293D" }}
    >
      <div
        // kontrolnya disini
        className="flex flex-row transition-transform ease-out duration-500 w-full bg-yellow-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="flex bg-full absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* ini buat tombolnya */}
      <div className=" absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-x-5">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
