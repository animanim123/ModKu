import { IoGiftOutline } from "react-icons/io5";
import { FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";

const Nav = ({ foryou,  categories, leaderboard }) => {
  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-black bg-white shadow-[0_3px_0_#000]">
      <div className="px-3">
        {/* Top */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a
            href="/"
            className="rounded-lg border-[3px] border-black bg-lime-300 px-3 py-1 text-2xl font-black text-black shadow-[3px_3px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#000]"
          >
            ModKu
          </a>

          {/* Social */}
          <div className="flex gap-2">
            <a
              href="https://www.whatsapp.com/channel/0029VbDE9KB6xCSRiZPq3H2f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-green-500 text-white shadow-[2px_2px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000]"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://youtube.com/@dilanahay2?si=f-bqP5ppQ_De1JG3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-red-500 text-white shadow-[2px_2px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000]"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.tiktok.com/@bangkev077?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-black text-white shadow-[2px_2px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000]"
            >
              <FaTiktok />
            </a>

            <a
              href="https://tako.id/GAZZ_DEV/gift"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-orange-400 text-black shadow-[2px_2px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000]"
            >
              <IoGiftOutline />
            </a>
          </div>
        </div>

        {/* Menu */}
        <ul className="mt-2 grid grid-cols-3 gap-3 pb-3 text-sm font-black">
          <li>
            <a
              href="/"
              className={`flex w-full items-center justify-center rounded-lg border-[3px] border-black px-4 py-2 transition-all ${
                foryou
                  ? "bg-lime-300 shadow-[3px_3px_0_#000]"
                  : "bg-white hover:bg-lime-100"
              }`}
            >
              For You
            </a>
          </li>

          {/* <li>
            <a
              href="/latest"
              className={`flex w-full items-center justify-center rounded-lg border-[3px] border-black px-4 py-2 transition-all ${
                latest
                  ? "bg-orange-300 shadow-[3px_3px_0_#000]"
                  : "bg-white hover:bg-orange-100"
              }`}
            >
              Latest
            </a>
          </li> */}

          <li>
            <a
              href="/categories"
              className={`flex w-full items-center justify-center rounded-lg border-[3px] border-black px-4 py-2 transition-all ${
                categories
                  ? "bg-sky-300 shadow-[3px_3px_0_#000]"
                  : "bg-white hover:bg-sky-100"
              }`}
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="/leaderboard"
              className={`flex w-full items-center justify-center rounded-lg border-[3px] border-black px-4 py-2 transition-all ${
                leaderboard
                  ? "bg-red-300 shadow-[3px_3px_0_#000]"
                  : "bg-white hover:bg-red-100"
              }`}
            >
              Leaderboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
