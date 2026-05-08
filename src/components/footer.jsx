import React from "react";
import { FaWhatsapp, FaYoutube, FaTiktok, FaGift  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold">ModKu Cihuy</h1>
            <p className="text-white/70 mt-3 text-sm leading-relaxed">
              Tempat download aplikasi mod terbaru dengan update tercepat
              dan tampilan modern.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Navigation</h2>

            <ul className="space-y-2 text-white/70">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-white transition">
                  Recommended
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-white transition">
                  New Update
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>

            <div className="flex items-center gap-4 text-2xl">
              <a
                href="https://www.whatsapp.com/channel/0029VbDE9KB6xCSRiZPq3H2f"
                className="hover:scale-110 transition duration-300"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://youtube.com/@dilanahay2?si=f-bqP5ppQ_De1JG3"
                className="hover:scale-110 transition duration-300"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@bangkev077?is_from_webapp=1&sender_device=pc"
                className="hover:scale-110 transition duration-300"
              >
                <FaTiktok />
              </a>

              <a
                href="https://tako.id/GAZZ_DEV"
                className="hover:scale-110 transition duration-300"
              >
                <FaGift />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-5 text-center text-sm text-white/50">
          © 2026 ModKu Cihuy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;