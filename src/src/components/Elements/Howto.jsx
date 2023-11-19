import { useState } from "react";

const Howto = () => {
  return (
    <div
      className="py-20 w-full h-full border-gray-700 shadow flex flex-col justify-between "
      style={{ backgroundColor: "#28293D" }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="flex flex-row inline-block text-center justify-center items-center">
            <div className="flex flex-col mt-10 mx-20 w-2/5 text-white items-center text-lg">
              <div className="h-full justify-center items-center text-justify">
                <p className="mt-2 text-5xl font-bold mb-10 text-center text-white">
                  How To Use
                </p>
                <p>
                  Pada website ini, terdapat 4 halaman, yaitu halaman Search
                  Engine Concept, About Us, Reverse Image Search, dan How to
                  Use. Saat program dijalankan, pengguna pertama kali akan masuk
                  ke halaman utama yaitu halaman Reverse Image Search.
                </p>
                <p>
                  Kita dapat mencari kemiripan gambar query dengan gambar dari
                  data set dengan cara mengupload data set dalam web dengan
                  select multiple image. Pertama tekan tombol choose files dan
                  pilih gambar dengan multiple image. Setelah dipilih, klik
                  submit.
                </p>
                <p>
                  Setelah itu kita diminta untuk upload gambar yang akan dicari
                  kemiripannya dengan cara insert gambar lalu tekan uplaod
                  gambar.
                </p>
                <p>
                  Langkah terakhir, kita dapat memilih untuk mencari kemiripan
                  gambar dengan metode perbandingan warna atau tekstur. Lalu
                  tekan tombol search.
                </p>
                <p>Hasil dapat dilihat dengan menekan tombol show images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howto;
