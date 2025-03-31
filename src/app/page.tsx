import Image from "next/image";
import Navbar from "./NavBar.jsx";
import ghlogo from "../../images/GHLogo.png";
import inlogo from "../../images/IN Logo.png";
import Next from "../../images/Next.svg";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="h-screen bg-white">
        <div className="absolute left-[7.56rem] top-[27.12rem]">
          <p className="text-xl font-extrabold text-primaryBlue ">
            FullStack Developer
          </p>
          <h1 className="text-2xl font-bold  text-black">Andres Cantillo</h1>
          <p className="text-sm w-[40.1875rem] text-black ">
            {" "}
            Desarrollador Full-Stack con conocimiento en tecnologias como
            Python, SQLAlchemy, React, Electron, MySQL. En busca de nuevas
            oportunidades de aprendizaje, nivel de ingles B2+.
          </p>
        </div>
          <div>
            <div className="absolute bottom-[14rem] right-12 h-40 w-1 bg-blue-500"></div>
            <img className="absolute bottom-[4.5rem] left-1/2" src={Next.src} alt="" />
            <img
              className="absolute bottom-[6rem] right-8"
              src={ghlogo.src}
              alt=""
            />
            <img
              className="absolute bottom-[10rem] right-8"
              src={inlogo.src}
              alt=""
            />
            <div className="absolute bottom-0 right-12 h-20 w-1 bg-blue-500"></div>
          </div>
      </section>

      <section className="h-screen bg-primaryBlue"></section>
    </div>
  );
}
