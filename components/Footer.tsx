import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blue-300 flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row w-5/6 lg:justify-between p-4 space-y-12 lg:space-y-0">
        <div className="lg:w-1/3 w-full text-black flex flex-col items-center h-full">
          <h4 className="text-4xl mb-3">Horaires</h4>
          <ul className="flex items-center justify-between space-x-10">
            <div className="flex flex-col items-center justify-center text-center">
              <li className="font-bold">Juillet - Août</li>
              <p>Lundi - Samedi</p>
              <p className="text-xl">
                12:00 - 14:00 <br /> 18:00 - 22:00
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <li className="font-bold">Septembre - Juin</li>
              <p>Mardi - Samedi</p>
              <p className="text-xl">
                12:00 - 14:00 <br /> 18:00 - 22:00
              </p>
            </div>
          </ul>
        </div>

        <div className="lg:w-1/3 w-full text-black flex flex-col items-center justify-center h-full">
          <h4 className="text-4xl mb-3">Adresse</h4>
          <a
            className="flex flex-col items-center justify-center text-center hover:underline text-xl"
            href="#"
          >
            3 Place Carnot
            <br />
            11000, Carcassonne
          </a>
        </div>

        <div className="lg:w-1/3 w-full text-black flex flex-col items-center justify-center h-full">
          <h4 className="text-4xl mb-3">Contact</h4>
          <ul className="flex flex-col gap-1 items-center justify-center text-xl">
            <li className="flex gap-2 hover:underline">
              <Mail />
              <a href="mailto:">
                example@gmail.com
              </a>
            </li>
            <li className="flex gap-2 hover:underline">
              <Phone />
              <a href="tel:+33">TEL</a>
            </li>
            <li className="flex gap-2 hover:underline">
              <Instagram />
              <a href="#">@insta</a>
            </li>
            <li className="flex gap-2 hover:underline"></li>
          </ul>
        </div>

        <div className="lg:w-1/3 w-full  flex items-center justify-center">
          <div className="w-52">
            <img src="#" alt="logo" />
          </div>
        </div>
      </div>

      <a
        href=""
        className="text-black hover:underline py-2 text-xs w-full bg-blue-300 border-t-2 flex justify-center items-center"
      >
        © Pablo ORTEGA - 2025
      </a>
    </footer>
  );
}

export default Footer;
