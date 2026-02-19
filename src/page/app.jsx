import React from "react";
import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { Link } from "react-router-dom";
import Ad300x250 from "../components/ad300x250.jsx";

const App = () => {
  const [read, setRead] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase.from("apkcuy").select("*").order("id", {ascending: false});

    if (error) {
      console.error("error cuy", error.message);
    } else {
      console.log("berhasil cuy");
      setRead(data);
    }
  };

  return (
    <>
      <div className="h-screen overflow-y-auto hide-scrollbar">
        <nav className="sticky top-0 z-50 bg-white transition-shadow duration-300 shadow-sm">
          <div className="flex h-16 items-center justify-center px-6">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-rocket text-2xl text-blue-600"></i>
              <span className="text-2xl font-semibold text-gray-800">
                ModKu.Cihuy
              </span>
            </div>
          </div>
        </nav>

        <Ad300x250 />

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
                src={item.icon}
                alt={item.name}
                className="w-14 h-14 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h2 className="font-semibold text-sm line-clamp-1">
                  {item.name}
                </h2>

                <p className="text-xs font-semibold mt-0.5 flex items-center gap-1">
                  <i className="fa-solid fa-code-branch text-orange-500"></i>
                  Versi {item.versi}
                </p>

                <p className="text-xs font-semibold mt-1 flex items-center gap-1 line-clamp-1">
                  <i className="fa-solid fa-screwdriver-wrench text-orange-500"></i>
                  {item.spesifikasi}
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

export default App;
