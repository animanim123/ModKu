import React from "react";

const Banner = () => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-cover bg-center bg-no-repeat shadow-[6px_6px_0_#000]"
      style={{ backgroundImage: `url("/bg.webp")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-[3px] border-black bg-lime-300 opacity-90" />
      <div className="absolute -left-5 -bottom-5 h-16 w-16 rounded-full border-[3px] border-black bg-orange-300 opacity-90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-10 text-center">
        <span className="mb-4 rounded-full border-[3px] border-black bg-lime-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0_#000]">
          🚀 MOD APK UPDATE
        </span>

        <h1 className="max-w-xl text-3xl font-black leading-tight text-white md:text-4xl">
          Welcome to <span className="text-lime-300">ModKu</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
          Portal aplikasi mod terbaik dengan update tercepat, koleksi lengkap,
          dan fitur premium yang siap menemani pengalaman digitalmu.
        </p>

        <a
          href="/categories"
          className="mt-6 rounded-xl border-[3px] border-black bg-orange-300 px-6 py-3 font-black text-black shadow-[4px_4px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000]"
        >
          Explore Now →
        </a>
      </div>
    </div>
  );
};

export default Banner;