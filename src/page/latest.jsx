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

  useEffect(()=>{
    getData()
  }, [])

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
      <div className="fixed inset-0 bg-white flex items-center justify-center flex-col">
        <h1 className="text-2xl">Loading....</h1>
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
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl">New Update</h1>
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
