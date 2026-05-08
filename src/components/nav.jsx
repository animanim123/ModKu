import React from "react";
import { Link } from "react-router-dom";
import { IoGiftOutline } from "react-icons/io5";
import { FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";

const Nav = ({foryou, latest, categories}) => {
  return (
    <nav className="sticky top-0 z-50 bg-white transition-shadow duration-300 shadow-sm">
      <div className="px-3">
        <div className="flex h-full items-center justify-between py-3">
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-2xl font-bold text-[#006A39]">ModKu</h1>
          </div>

          <div className="flex gap-2">
            <Link
              to="https://www.whatsapp.com/channel/0029VbDE9KB6xCSRiZPq3H2f"
              className="text-md bg-[#006A39] text-white p-1 rounded-md"
            >
              <FaWhatsapp />
            </Link>

            <Link
              to="https://youtube.com/@dilanahay2?si=f-bqP5ppQ_De1JG3"
              className="text-md bg-red-600 text-white p-1 rounded-md"
            >
              <FaYoutube />
            </Link>

            <Link
              to="https://www.tiktok.com/@bangkev077?is_from_webapp=1&sender_device=pc"
              className="text-md bg-black text-white p-1 rounded-md"
            >
              <FaTiktok />
            </Link>

            <Link
              to="https://tako.id/GAZZ_DEV"
              className="text-md bg-yellow-500 text-white p-1 rounded-md"
            >
              <IoGiftOutline />
            </Link>
          </div>
        </div>
        <ul className="flex gap-5 items-center mt-2 text-md font-normal">
          <li className={`pb-5 cursor-pointer ${foryou && "border-b-2 border-[#006A39] text-[#006A39] font-semibold"}`}>
            <a href="/">For you</a>
          </li>
          <li className={`pb-5 cursor-pointer ${latest && "border-b-2 border-[#006A39] text-[#006A39] font-semibold"}`}><a href="/latest">Latest</a></li>
          <li className={`pb-5 cursor-pointer ${categories && "border-b-2 border-[#006A39] text-[#006A39] font-semibold"}`}><a href="/categories">Categories</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
