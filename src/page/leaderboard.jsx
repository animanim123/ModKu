import Nav from "../components/nav.jsx";
import { useState } from "react";

const Leaderboard = () => {
  const leaderboard = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
          <div className="relative rounded-2xl border-[3px] h-full border-black bg-cyan-300 shadow-[6px_6px_0_#000] overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-cyan-300">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/20 border-t-black" />
                  <p className="font-bold">Memuat leaderboard...</p>
                </div>
              </div>
            )}

            <iframe
              src={import.meta.env.VITE_TAKO_API_URL}
              className="w-full h-[500px] border-0"
              onLoad={() => setIsLoading(false)}
              title="Tako Leaderboard"
            />
          </div>

          {/* Tombol Trakteer */}
          <a
            href="https://tako.id/GAZZ_DEV/gift"
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
