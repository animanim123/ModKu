import React from "react";
import { Link } from "react-router-dom";

const RecomendForYou = ({ item }) => {
  return (
    <Link to={item.url}
      key={item.id}
      className="group w-[100px] cursor-pointer transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      {/* Cover */}
      <div className="overflow-hidden rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_#000]">
        <img
          src={item.kategori?.icon}
          alt={item.kategori?.name}
          className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-2">
        <h1 className="truncate text-sm font-black">
          {item.kategori?.name}
        </h1>

        <div className="mt-1 inline-flex rounded-md border-2 border-black bg-orange-300 px-2 py-0.5 text-[10px] font-extrabold shadow-[2px_2px_0_#000]">
          v{item.versi}
        </div>
      </div>
    </Link>
  );
};

export default RecomendForYou;