import React from "react";

const List = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto hide-scrollbar">
        <Nav />

        <h1 className="text-xl font-semibold mb-2 px-4 pt-7 gap-2 flex items-center">
          <i className="fas fa-bell text-md"></i>
          Aplikasi Mod New
        </h1>

        <div className="px-4 pb-4 space-y-3">
          {read.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="group flex items-center gap-4 p-3 border border-black/30 rounded-xl hover:bg-gray-50 hover:shadow-sm hover:border-black/80 transition"
            >
              {/* ICON */}
              <img
                src={item.kategori?.icon}
                alt={item.kategori?.name}
                className="w-14 h-14 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h2 className="font-semibold text-sm line-clamp-1">
                  {item.kategori?.name}
                </h2>

                <p className="text-xs font-semibold mt-0.5 flex items-center gap-1">
                  <i className="fa-solid fa-code-branch text-orange-500"></i>
                  Versi {item.versi}
                </p>

                <p className="text-xs font-semibold mt-1 flex items-center gap-1 line-clamp-1">
                  <i className="fa-solid fa-screwdriver-wrench text-orange-500"></i>
                  {item.kategori?.spesifikasi}
                </p>
              </div>

              <i className="fa-solid fa-chevron-right text-black/40 group-hover:text-black/80"></i>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
