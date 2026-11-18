import Nav from "../components/nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

import leaderboardTako from "../components/leaderboardTako.jsx";

const formatRupiah = (amount) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

const Leaderboard = () => {
  const leaderboard = useState(true);
  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_TRAKTEER_API_URL, {
        headers: {
          key: import.meta.env.VITE_TRAKTEER_API_KEY,
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      setRead(res.data.data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="rounded-2xl border-[4px] border-black bg-lime-300 px-8 py-6 shadow-[8px_8px_0_#000]">
          <div className="flex flex-col items-center gap-4">
            {/* Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-[5px] border-black border-t-transparent" />

            <h1 className="text-2xl font-black text-black">Loading...</h1>

            <p className="text-sm font-bold text-black/70">
              Please wait a moment
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <Nav leaderboard={leaderboard} />
      </header>

      <main className="min-h-screen bg-[#fdfcfa] px-3 py-5 text-black">
        <section className="mx-auto max-w-xl space-y-5">
          {/* Header */}
          <div className="rounded-2xl border-[3px] border-black bg-white p-4 shadow-[6px_6px_0_#000]">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-yellow-300 text-4xl">
                🏆
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight">
                  Leaderboard
                </h1>
                <p className="text-sm font-bold text-gray-600">
                  Para supporter terbaik!
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border-[3px] border-black bg-pink-300 p-3">
              <p className="text-sm font-bold">
                ❤️ Terima kasih yang sudah donasi!
              </p>
            </div>
          </div>

          {/* Podium */}
          <div className="rounded-2xl border-[3px] border-black bg-cyan-300 p-4 shadow-[6px_6px_0_#000]">
            <h2 className="mb-4 text-lg font-black">⭐ TOP SUPPORTER</h2>

            <div className="space-y-3">
              {read
                .sort((a, b) => b.amount - a.amount)
                .map((item, index) => {
                  const rankColor =
                    ["bg-amber-300", "bg-violet-300", "bg-orange-300"][index] ||
                    "bg-slate-100";
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 rounded-xl border-[3px] border-black p-3 shadow-[3px_3px_0_#000] ${rankColor}`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-[3px] border-black bg-white text-xl font-black">
                        {["🥇", "🥈", "🥉"][index] || `#${index + 1}`}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-black">
                          {item.creator_name}
                        </p>
                        <p className="text-xs font-bold text-gray-700">
                          Neraktir {item.unit_name}
                        </p>
                      </div>

                      <p className="text-right text-sm font-black">
                        {formatRupiah(item.amount)}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Tombol Trakteer */}
          <a
            href="https://trakteer.id/gazzdev/gift"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl border-[3px] border-black bg-[#ff7378] px-5 py-4 text-lg font-black shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            ❤️ Dukung Admin
          </a>
        </section>
      </main>
    </>
  );
};

export default Leaderboard;
