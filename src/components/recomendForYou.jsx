import React from "react";

const RecomendForYou = ({item}) => {
  return (
    <div key={item.id} className="">
      <div className="rounded-lg shadow-md border-[0.5px] border-black/50 overflow-hidden w-[100px]">
        <img src={item.kategori?.icon} alt="" />
      </div>
      <div className="">
        <h1 className="text-black text-md font-medium truncate">{item.kategori?.name}</h1>
        <p className="text-black/80 text-sm">Versi {item.versi}</p>
      </div>
    </div>
  );
};

export default RecomendForYou;
