import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-white">
      <Navbar />
      <Carousel />

      <div className="py-6 mx-56">
        <h2 className="font-bold text-4xl text-center text-gray-700 mb-6">
          Celebes
        </h2>
        <p className="text-black text-justify mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-black text-justify mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="py-6 mx-24 bg-gray-200">
        <h2 className="font-bold text-2xl text-gray-700 mb-4">
          Budaya-Budaya dan Kearifan Lokal Pulau Sulawsi
        </h2>
        <div className="divider" />
        <div className="flex flex-wrap justify-center gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
