import '../styles/Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <Link to='/'>
                <h2 className='navtitle'>Maurice AKEKO</h2>
            </Link>

            <nav className={menuOpen ? 'open' : 'closed'}>
                <Link to='' className='navlink'> Accueil </Link>
                <Link to='/Works' className='navlink'> Travaux </Link>
                <Link to='/Skills' className='navlink'> Compétences </Link>
                <Link to='/Info' className='navlink'> Présentation </Link>
            </nav>
            
            <IoMenu className='navicons' onClick={toggleMenu}/>
        </header>
    );
}
    