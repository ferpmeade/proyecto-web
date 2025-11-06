import '../styles/Navbar.css';
import Image from 'next/image';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom'
import Link from 'next/link';

const Navbar = () => {
    return(
        <header className='header'>
            <div className='logo'>
                <Image 
                src="/assets/logo.png" 
                alt="logo real madrid" 
                width={60}   // ancho en px
                height={60}  // alto en px 
                />
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <Link href='/'>
                            <span>inicio</span>
                            <span>inicio</span>
                            <span>inicio</span>
                            <span>inicio</span>
                        </Link>
                    </li>

                    <li>
                        <Link href='/tabla'>
                          <span>Tabla</span>
                          <span>Tabla</span>
                          <span>Tabla</span>
                          <span>Tabla</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/estadio'>
                          <span>Estadio</span>
                          <span>Estadio</span>
                          <span>Estadio</span>
                          <span>Estadio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/palmares'>
                          <span>Palmares</span>
                          <span>Palmares</span>
                          <span>Palmares</span>
                          <span>Palmares</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Navbar;
