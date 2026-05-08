import React from "react";

const Banner = () => {
  return (
    <div
      className="border-2 h-full rounded-xl px-1 py-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url("/bg.webp")` }}
    >
      <div className="bg-black/70 absolute inset-0 z-10 bg-cover" />
      <div className="relative z-20 flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-center text-white">
          Youkoso to ModKu Cihuy
        </h1>
        <p className="font-normal text-sm text-center text-white">
          Portal aplikasi mod terbaik untuk kamu yang ingin fitur lebih bebas,
          lebih seru, dan lebih maksimal. Update cepat, koleksi lengkap, dan
          siap menemani pengalaman digitalmu.
        </p>
      </div>
    </div>
  );
};

export default Banner;
