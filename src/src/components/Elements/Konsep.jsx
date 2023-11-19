import { useState } from "react";

const Konsep = () => {
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
                  Konsep Singkat Search Engine
                </p>
                <p>
                  Website ini merupakan search engine yang dibangun dengan
                  menggunakan CBIR warna dan CBIR tekstur dengan metode cosine
                  similarity. Website ini terdiri dari 3 bagian, yaitu Frontend,
                  Backend. Frontend menggunakan stack ReactJS untuk struktur
                  website dan Tailwind sebagai framework untuk styling. Pada
                  bagian backend menggunakan Golang. Website ini tidak
                  menggunakan database karena gambar yang diupload disimpan pada
                  local folder.
                </p>
                <p>
                  Kita dapat membandingkan kemiripan antara 2 gambar dengan
                  menggunakan CBIR warna ataupun tekstur. Dengan CBIR warna,
                  kita mengkonversikan RGB menjadi HSV (Hue, Saturatuin, Value)
                  dengan membagi blok 4x4 yang nantinya akan dimasukan kedalam
                  histogram untuk tiap blok dengan keluaran vektor. Setelah itu
                  vektor untuk setiap blok dari 2 gambar dibandingkan dengan
                  cosine similarity yang nantinya akan dicari rata ratanya
                  dengan memagi total blok (16). Dengan CBIR tekstur, kita
                  membuat co-occurrence matrix untuk mencari contrast, entropy
                  dan homogeneity lalu membandingkannya dengan cosine
                  similarity.
                </p>
                <p>
                  CBIR warna sangat bergantung pada warnanya sehingga hasil yang
                  dikeluarkan merupakan warna yang sama / mirip dengan image
                  query. Namun, pada CBIR warna terdapat suatu error dimana saat
                  kita membandingkan 2 gambar warna hitam full dan warna putih
                  full akan menampilkan hasil 60% keatas. Hal ini disebabkan
                  karena Hue dan Saturation warna hitam dan putih sama, yang
                  membedakan hanya value nya saja.
                </p>
                <p>
                  Menurut kami, keakuratan untuk tiap tiap metode lebih akurat
                  CBIR dengan parameter warna. Hal ini terjadi karena parameter
                  yang digunakan sebagai perbandingannya banyak (14 parameter
                  terdiri dari 8 Hue, 3 Saturation, 3 Value) sedangkan CBIR
                  Texture hanya menggunakan 3 parameter pembanding (contrast,
                  entropy dan homogeneity). Ini menandakan bahwa, semakin besar
                  vektor maka akan semakin akurat hasil yang dihasilkan. Namun
                  menurut kami tetap lebih baik menggunakan machine learning
                  karena hasil yang didapat akan lebih akurat daripada program
                  ini.
                </p>
                <p>
                  Program ini dapat bermanaat untuk membantu kita dalam mencari
                  kemiripan gambar atau mencari gambar yang sama persis dengan
                  gambar lain yang ada dalam dataset atau menggunakan image
                  scraping. Program ini juga dapat digunakan untuk mengecek
                  apakah kita sudah memiliki gambar dalam suatu data set atau
                  belum, jika sudah maka akan ditampiilkan gambar yang memiliki
                  kemiripan 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konsep;
