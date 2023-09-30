import { useEffect, useState } from "react";
import { getAllCultures } from "@/api/public.service";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Homepage() {
  const [cultures, setCultures] = useState([]);
  const [isCarouselPassed, setIsCarouselPassed] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCultures();
      if (data) setCultures(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsCarouselPassed(true);
      } else {
        setIsCarouselPassed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-white">
      <Navbar isCarouselPassed={isCarouselPassed} />
      <Carousel />

      <div className="py-6 px-4 sm:mx-12 md:px-0 xl:mx-56">
        <h2 className="font-bold text-4xl text-center text-gray-700 mb-6">
          Celebes
        </h2>
        <p className="text-black text-justify mb-4">
          Di tengah arus modernisasi dan globalisasi yang semakin meluas,
          masyarakat Sulawesi, yang dikenal dengan keberagaman budaya dan
          tradisi etniknya, mulai kehilangan jejaknya terhadap akar budaya yang
          telah menjadi ciri khas pulau ini selama berabad-abad. Generasi muda,
          terutama di kota-kota besar, semakin terasing dari budaya tradisional
          Sulawesi karena pengaruh gaya hidup perkotaan yang semakin
          mendominasi. Bahasa, adat istiadat, seni, dan ritual yang telah
          diturunkan dari nenek moyang mereka selama berpuluh-puluh tahun mulai
          terabaikan. Fenomena ini terutama disebabkan oleh modernisasi yang
          pesat, yang membawa perubahan dalam nilai-nilai sosial dan preferensi,
          dan urbanisasi yang memicu pergeseran fokus ke arah norma-norma
          perkotaan.
        </p>
        <p className="text-black text-justify mb-4">
          Selain itu, budaya Sulawesi juga kaya akan tradisi musik, tarian, dan
          seni rupa yang unik. Setiap etnis di Sulawesi memiliki bentuk seni
          yang khas, dan ini tercermin dalam berbagai festival budaya yang
          diadakan sepanjang tahun. Dalam upaya memahami dan melestarikan
          kekayaan budaya ini, kami mempersembahkan web &quot;Celebes&quot;
          sebagai sumber informasi dan inspirasi tentang budaya Sulawesi
          Selatan. Kami berharap web ini dapat menjadi wadah bagi semua orang
          yang ingin menjelajahi keindahan dan keragaman budaya Sulawesi.
        </p>
      </div>

      <div className="p-6 pb-14 bg-gray-200 md:px-16">
        <h2 className="font-bold text-2xl text-gray-700">
          Budaya-Budaya dan Kearifan Lokal Pulau Sulawesi
        </h2>
        <div className="divider" />
        <div className="flex flex-col flex-wrap gap-10 sm:flex-row sm:gap-4 sm:justify-between md:justify-center">
          {cultures.map((culture, i) => (
            <div
              key={i}
              className="grow basis-full sm:basis-[48%] md:basis-[32%]"
            >
              <Card
                id={culture.id}
                name={culture.name}
                desc={culture.desc}
                image={culture.image}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
