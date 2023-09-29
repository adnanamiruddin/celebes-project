import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ id, name, desc, image }) {
  return (
    <div className="card w-full basis-3 bg-base-100 shadow-xl">
      <figure className="relative h-60">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc.slice(0, 100)}...</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/${id}`} className="btn btn-primary">
            Baca Lebih Lanjut
          </Link>
        </div>
      </div>
    </div>
  );
}
