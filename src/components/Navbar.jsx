import React from "react";

export default function Navbar({ isCarouselPassed }) {
  return (
    <div
      className={`navbar fixed z-50 transition-all ease-in duration-500 ${
        isCarouselPassed ? "bg-base-100" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Jelajahi</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">Celebes</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Beranda</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Kategori</summary>
              <ul className="p-2">
                <li>
                  <a>Adat Istiadat</a>
                </li>
                <li>
                  <a>Bahasa</a>
                </li>
                <li>
                  <a>Kuliner</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Tentang</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent">Masuk</a>
      </div>
    </div>
  );
}
