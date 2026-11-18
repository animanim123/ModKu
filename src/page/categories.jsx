import { GetDatas } from "../lib/getDatas.jsx";
import { useEffect, useState } from "react";
import Nav from "../components/nav.jsx";
import NewUpdate from "../components/newUpdate.jsx";
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

    if (acc[categoryName].length < 3) {
      acc[categoryName].push(item);
    }

    return acc;
  }, {});

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
        <Nav categories={categories} />
      </header>
      <main className="px-3 mt-5">
        {Object.entries(groupedCategory).map(([categoryName, items]) => (
          <section key={categoryName} className="mb-8">
            <h1 className="mb-4 inline-block rounded-lg border-[3px] border-black bg-lime-300 px-4 py-2 text-2xl font-black shadow-[3px_3px_0_#000]">
              {categoryName}
            </h1>

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
