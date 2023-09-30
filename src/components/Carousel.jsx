import React from "react";
import rumahTongkonanImg from "../../public/rumah-tongkonan.jpeg";
import mappaletteBolaImg from "../../public/mappalette-bola.jpeg";
import gandrangBuloImg from "../../public/gandrang-bulo.webp";
import cotoMakassarImg from "../../public/coto-makassar.jpg";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  return (
    <div className="carousel relative w-full md:h-screen">
      <CarouselItem
        slide={"slide1"}
        title={"Rumah Tongkonan"}
        desc={`Rumah Tongkonan adalah rumah tradisional etnik Toraja yang menakjubkan dengan arsitektur khasnya yang kaya akan detail dan makna budaya.`}
        image={rumahTongkonanImg}
        prevSlide={"slide4"}
        nextSlide={"slide2"}
      />

      <CarouselItem
        slide={"slide2"}
        title={"Mappalette Bola"}
        desc={`Adat Mappalette Bola adalah upacara adat yang merayakan persatuan dan kedamaian di antara suku-suku di Sulawesi Selatan dengan tarian, nyanyian, dan perayaan.`}
        image={mappaletteBolaImg}
        prevSlide={"slide1"}
        nextSlide={"slide3"}
      />

      <CarouselItem
        slide={"slide3"}
        title={"Gandrang Bulo"}
        desc={`Gandrang Bulo adalah jenis musik tradisional dari Sulawesi Selatan yang kaya akan ritme dan harmoni, sering dimainkan dalam berbagai upacara budaya.`}
        image={gandrangBuloImg}
        prevSlide={"slide2"}
        nextSlide={"slide4"}
      />

      <CarouselItem
        slide={"slide4"}
        title={"Coto Makassar"}
        desc={`Coto Makassar adalah hidangan lezat berupa soto dengan bahan dasar daging sapi yang khas dari Makassar, disajikan dengan kuah kacang kental yang nikmat.`}
        image={cotoMakassarImg}
        prevSlide={"slide3"}
        nextSlide={"slide1"}
      />

      {/* <div className="absolute bottom-1 flex justify-center w-full py-2 gap-2">
        <a href="#slid1" className="badge badge-primary badge-xs">
          
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
        <a href="#slide4" className="btn btn-xs">
          4
        </a>
      </div> */}
    </div>
  );
}
