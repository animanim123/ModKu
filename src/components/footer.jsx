import React from "react";
import { FaWhatsapp, FaYoutube, FaTiktok, FaGift } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-10 px-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-[3px] border-black bg-yellow-300 shadow-[6px_6px_0_#000]">
        <div className="grid gap-8 p-6 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-black">ModKu Cihuy</h1>

            <p className="mt-3 text-sm font-medium text-black/80">
              Tempat download aplikasi mod terbaru dengan update tercepat.
            </p>
          </div>

          {/* Navigation (Desktop Only) */}
          <div className="hidden md:block">
            <h2 className="mb-3 text-lg font-black">Navigation</h2>

            <ul className="space-y-2 font-semibold">
              <li><a href="/">Home</a></li>
              <li><a href="/">For You</a></li>
              <li><a href="/latest">Latest</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/privacypolicy">Privacy Policy</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="mb-3 text-lg font-black text-center md:text-left">
              Follow Us
            </h2>

            <div className="flex justify-center gap-3 md:justify-start">
              {[
                {
                  href: "https://www.whatsapp.com/channel/0029VbDE9KB6xCSRiZPq3H2f",
                  icon: <FaWhatsapp />,
                },
                {
                  href: "https://youtube.com/@dilanahay2?si=f-bqP5ppQ_De1JG3",
                  icon: <FaYoutube />,
                },
                {
                  href: "https://www.tiktok.com/@bangkev077",
                  icon: <FaTiktok />,
                },
                {
                  href: "https://tako.id/GAZZ_DEV",
                  icon: <FaGift />,
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border-[3px] border-black bg-white text-xl shadow-[3px_3px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#000]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-[3px] border-black px-6 py-4 text-center text-sm font-bold">
          © 2026 ModKu Cihuy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;