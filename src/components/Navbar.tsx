import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo real madrid" />
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <Link to='/'>
                            <span>inicio</span>
                            <span>inicio</span>
                            <span>inicio</span>
                            <span>inicio</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/tabla'>
                          <span>Tabla</span>
                          <span>Tabla</span>
                          <span>Tabla</span>
                          <span>Tabla</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/estadio'>
                          <span>Estadio</span>
                          <span>Estadio</span>
                          <span>Estadio</span>
                          <span>Estadio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/palmares'>
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
