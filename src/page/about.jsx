import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

const About = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="px-3 mt-3 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-2">About Modku</h1>

          <p className="text-gray-500 mb-8">
            Mengenal lebih dekat website Modku
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Tentang Modku</h2>

            <p className="text-gray-700 leading-7">
              Modku adalah website yang menyediakan berbagai informasi dan
              referensi aplikasi Android yang menawarkan pengalaman penggunaan
              lebih nyaman dengan gangguan iklan yang lebih minim. Selain itu,
              kami juga membagikan tutorial, tips penggunaan aplikasi, serta
              berbagai informasi teknologi yang bermanfaat bagi pengguna.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Misi Kami</h2>

            <p className="text-gray-700 leading-7">
              Misi kami adalah membantu pengguna menemukan aplikasi yang sesuai
              dengan kebutuhan mereka melalui informasi yang jelas, mudah
              dipahami, dan selalu diperbarui secara berkala.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Apa yang Kami Bagikan?
            </h2>

            <p className="text-gray-700 leading-7">
              Di Modku, Anda dapat menemukan berbagai ulasan aplikasi, panduan
              penggunaan, tips dan trik Android, rekomendasi aplikasi
              produktivitas, hiburan, serta informasi teknologi lainnya yang
              relevan dengan kebutuhan pengguna modern.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Komitmen Kami</h2>

            <p className="text-gray-700 leading-7">
              Kami berupaya menyajikan informasi yang akurat dan bermanfaat.
              Seluruh konten di website ini dibuat untuk tujuan edukasi dan
              informasi agar pengunjung dapat memperoleh referensi sebelum
              menggunakan suatu aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Terima Kasih</h2>

            <p className="text-gray-700 leading-7">
              Terima kasih telah mengunjungi Modku. Dukungan Anda membantu kami
              untuk terus menghadirkan informasi, ulasan, dan rekomendasi
              aplikasi yang lebih baik setiap harinya.
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

export default About;
