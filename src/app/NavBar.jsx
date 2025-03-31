import Link from 'next/link';

function Navbar() {
  return (
    <div className='sticky top-0' >
    <nav className="Dark:bg-gray-800 font-bold Dark:text-white absolute top-10 right-10 z-10  ">
      <ul className=" flex justify-center gap-10 text-black" >
        <li >
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Sobre Mi</Link>
        </li>
        <li>
          <Link href="/contact">Proyectos</Link>
        </li>
        
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav></div>
  );
}

export default Navbar;