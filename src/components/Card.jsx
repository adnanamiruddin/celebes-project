import Image from "next/image";
import React from "react";

export default function Card({ name, desc, image }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative h-60">
        <Image
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
