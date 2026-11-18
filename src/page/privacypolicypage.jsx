import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

const PrivacypolicyPage = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="px-3 mt-3 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>

          <p className="text-gray-500 mb-8">
            Terakhir diperbarui: 24 Mei 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Informasi Pengunjung
            </h2>

            <p className="text-gray-700 leading-7">
              Website ini tidak meminta login atau pendaftaran pengguna.
              Namun, beberapa informasi dasar seperti alamat IP, jenis
              browser, perangkat, dan halaman yang dikunjungi dapat
              tercatat secara otomatis untuk keperluan keamanan dan
              analitik.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Iklan Pihak Ketiga
            </h2>

            <p className="text-gray-700 leading-7">
              Website ini menggunakan layanan iklan pihak ketiga dari
              Adsterra yang dapat menampilkan iklan, redirect, atau
              tautan promosi. Layanan tersebut dapat menggunakan
              teknologi seperti cookies atau tracking sesuai kebijakan
              mereka masing-masing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Tautan Eksternal
            </h2>

            <p className="text-gray-700 leading-7">
              Beberapa link pada website ini dapat mengarah ke situs
              eksternal yang berada di luar kendali kami. Kami tidak
              bertanggung jawab atas isi maupun kebijakan privasi dari
              situs pihak ketiga tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Persetujuan
            </h2>

            <p className="text-gray-700 leading-7">
              Dengan menggunakan website ini, Anda dianggap telah
              membaca dan menyetujui Privacy Policy ini.
            </p>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PrivacypolicyPage;