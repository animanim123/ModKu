import React from "react";
import { Link } from "react-router-dom";

const NewUpdate = ({ item }) => {
  return (
    <Link
      to={item.url}
      className="group flex items-center gap-4 rounded-xl border-[3px] border-black bg-white p-3 shadow-[4px_4px_0_#000] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000]"
    >
      {/* ICON */}
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border-[3px] border-black bg-yellow-300">
        <img
          src={item.kategori?.icon}
          alt={item.kategori?.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex-1">
        <h2 className="line-clamp-1 text-sm font-extrabold">
          {item.kategori?.name}
        </h2>

        <p className="mt-1 flex items-center gap-1 text-xs font-bold">
          <i className="fa-solid fa-code-branch text-orange-500"></i>
          Versi {item.versi}
        </p>

        <p className="mt-1 flex items-center gap-1 text-xs font-bold line-clamp-1">
          <i className="fa-solid fa-screwdriver-wrench text-blue-600"></i>
          {item.kategori?.spesifikasi}
        </p>
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-md border-[2px] border-black bg-pink-300 transition-transform group-hover:rotate-6">
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </div>
    </Link>
  );
};

export default NewUpdate;