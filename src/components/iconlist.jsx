import React from "react";

const Iconlist = () => {
  return (
    <>
      <div className="px-4 pb-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-9 gap-x-2 gap-y-3">
          {read.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="min-w-[140px] max-w-[140px] shrink-0 p-1"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-md mx-auto hover:scale-105 transition"
              />

              <h2 className="mt-2 text-sm font-medium text-center line-clamp-2">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Iconlist;
