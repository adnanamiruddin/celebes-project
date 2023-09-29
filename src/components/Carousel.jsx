import Image from "next/image";
import React from "react";
import rumahTongkonanImg from "../../public/rumah-tongkonan.jpeg";
import pindahRumahImg from "../../public/pindah-rumah.jpg";
import mappaletteBolaImg from "../../public/mappalette-bola.jpeg";
import gandrangBuloImg from "../../public/gandrang-bulo.webp";
import cotoMakassarImg from "../../public/coto-makassar.jpg";

export default function Carousel() {
  return (
    <div className="carousel w-full max-h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src={rumahTongkonanImg}
          alt="carousel"
          objectFit="cover"
          className="w-full brightness-50 blur-sm"
        />
        <div className="absolute flex justify-end items-end w-full h-full brightness-100">
          <div className="absolute top-1/3 left-32 w-3/12">
            <h3 className="font-bold text-3xl mb-10">Rumah Tongkonan</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, eaque fugit. Quam quo ipsam quas molestias quae, dicta
              perspiciatis odio?
            </p>
          </div>
          <Image
            src={rumahTongkonanImg}
            alt="carousel"
            className="w-8/12 h-5/6 object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-ghost text-lg">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-ghost text-lg">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src={mappaletteBolaImg}
          alt="carousel"
          objectFit="cover"
          className="w-full brightness-50 blur-sm"
        />
        <div className="absolute flex justify-end items-end w-full h-full brightness-100">
          <div className="absolute top-1/3 left-32 w-3/12">
            <h3 className="font-bold text-3xl mb-10">Mappalette Bola</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, eaque fugit. Quam quo ipsam quas molestias quae, dicta
              perspiciatis odio?
            </p>
          </div>
          <Image
            src={mappaletteBolaImg}
            alt="carousel"
            className="w-8/12 h-5/6 object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-ghost text-lg">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-ghost text-lg">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src={gandrangBuloImg}
          alt="carousel"
          objectFit="cover"
          className="w-full brightness-50 blur-sm"
        />
        <div className="absolute flex justify-end items-end w-full h-full brightness-100">
          <div className="absolute top-1/3 left-32 w-3/12">
            <h3 className="font-bold text-3xl mb-10">Gandrang Bulo</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, eaque fugit. Quam quo ipsam quas molestias quae, dicta
              perspiciatis odio?
            </p>
          </div>
          <Image
            src={gandrangBuloImg}
            alt="carousel"
            className="w-8/12 h-5/6 object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-ghost text-lg">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-ghost text-lg">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src={cotoMakassarImg}
          alt="carousel"
          objectFit="cover"
          className="w-full brightness-50 blur-sm"
        />
        <div className="absolute flex justify-end items-end w-full h-full brightness-100">
          <div className="absolute top-1/3 left-32 w-3/12">
            <h3 className="font-bold text-3xl mb-10">Coto Makassar</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, eaque fugit. Quam quo ipsam quas molestias quae, dicta
              perspiciatis odio?
            </p>
          </div>
          <Image
            src={cotoMakassarImg}
            alt="carousel"
            className="w-8/12 h-5/6 object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-ghost text-lg">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-ghost text-lg">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
