import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import pulauSulawesiIcon from "../../public/pulau-sulawesi-icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Image src={pulauSulawesiIcon} alt="Icon" className="w-12" />
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="" target="_blank" rel="noopener">
          <AiOutlineInstagram className="text-white text-2xl" />
        </a>
        <a href="" target="_blank" rel="noopener">
          <AiOutlineYoutube className="text-white text-2xl" />
        </a>
        <a href="" target="_blank" rel="noopener">
          <AiOutlineWhatsApp className="text-white text-2xl" />
        </a>
      </nav>
    </footer>
  );
}
