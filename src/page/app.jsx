import React from "react";
import { GetDatas } from "../lib/getDatas.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.jsx";
import RecomendForYou from "../components/recomendForYou.jsx";
import { IoArrowForward, IoSparkles } from "react-icons/io5";
import NewUpdate from "../components/newUpdate.jsx";
import Banner from "../components/banner.jsx";
import Footer from "../components/footer.jsx";

const App = () => {
  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rekomend, setRekomend] = useState([]);
  const foryou = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await GetDatas();
      const rekomendData = data.filter((item) => item.rekomend);
      setRekomend(rekomendData);
      setRead(data);
    } catch (error) {
      console.error("error cuy", error.message);
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
        <Nav foryou={foryou} />
      </header>
      <main className="px-3 mt-3 flex flex-col gap-5">
        <section>
          <Banner />
        </section>
        <section className="md:hidden">
          <div className="flex items-center justify-between rounded-xl border-[3px] border-black bg-yellow-300 px-4 py-3 shadow-[4px_4px_0_#000]">
            <h1 className="text-lg font-black tracking-tight">
              Recommended for you
            </h1>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-white transition-transform hover:-translate-y-0.5 hover:translate-x-0.5">
              <IoSparkles className="text-lg" />
            </div>
          </div>
          <div className="my-3 grid grid-cols-3 gap-4">
            {rekomend.map((item) => (
              <RecomendForYou key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h1 className="rounded-lg border-[3px] border-black bg-white px-4 py-2 text-lg font-black shadow-[3px_3px_0_#000]">
              New Update
            </h1>

            <Link
              to="/latest"
              className="flex h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-lime-300 shadow-[3px_3px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000]"
            >
              <IoArrowForward className="text-lg" />
            </Link>
          </div>
          <div className="my-3 space-y-3">
            {read.slice(0, 10).map((item) => (
              <NewUpdate key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
