import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <div className="portfolio__navbar-links_header">
                    <h2>JJ Lintol</h2>
                </div>
                <div className="portfolio__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#values">Values</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#impact">Impact</a></p>
                    <p><a href="#inspiration">Inspiration</a></p>
                </div>
            </div>
            <div className="portfolio__navbar-socials">
                <div className="portfolio__navbar-socials_container-logo">
                    <a href="https://www.instagram.com/"><img src={instagram} /></a>
                </div>
                <div className="portfolio__navbar-socials_container-logo">
                    <a href="https://twitter.com/"><img src={twitter} /></a>
                </div>
                <div className="portfolio__navbar-socials_container-logo">
                    <a href="https://github.com/"><img src={github} /></a>
                </div>
            </div>
            <div className="portfolio__navbar-menu">
                {
                    toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="portfolio__navbar-menu_container scale-up-center">
                        <div className="portfolio__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#values">Values</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#impact">Impact</a></p>
                            <p><a href="#inspiration">Inspiration</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
