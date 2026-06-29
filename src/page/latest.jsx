import React from "react";
import { GetDatas } from "../lib/getDatas.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.jsx";
import NewUpdate from "../components/newUpdate.jsx";
import Banner from "../components/banner.jsx";
import Footer from "../components/footer.jsx";

const Latest = () => {
  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(true);
  const latest = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await GetDatas();
      setRead(data);
    } catch (error) {
      console.log("error cuy", error);
      setRead([]);
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
        <Nav latest={latest} />
      </header>
      <main>
        <section className="mx-3 mt-3">
          <div className="flex items-center justify-between">
            <h1 className="inline-block rounded-lg border-[3px] border-black bg-cyan-300 px-4 py-2 text-xl font-black shadow-[4px_4px_0_#000]">
              New Update
            </h1>
          </div>
          <div className="my-3 space-y-3">
            {read.map((item) => (
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

export default Latest;
