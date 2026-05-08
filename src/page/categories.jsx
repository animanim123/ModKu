import React from "react";
import { GetDatas } from "../lib/getDatas.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.jsx";
import NewUpdate from "../components/newUpdate.jsx";
import Banner from "../components/banner.jsx";
import Footer from "../components/footer.jsx";

const Categories = () => {
  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = useState(true);
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

  const groupedCategory = read.reduce((acc, item) => {
    const categoryName = item.kategori?.name;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(item);

    return acc;
  }, {});

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
        <Nav categories={categories} />
      </header>
      <main className="px-3 mt-5">
        {Object.entries(groupedCategory).map(([categoryName, items]) => (
          <section key={categoryName} className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>

            <div className="space-y-3">
              {items.map((item) => (
                <NewUpdate key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Categories;
