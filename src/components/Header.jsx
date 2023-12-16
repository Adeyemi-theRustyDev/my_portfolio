import { useState } from "react";

const Header = () => {
    const menuOpenedStyles = "flex-col md:flex-row md:flex gap-8";
    const menuClosedStyles = `hidden ${menuOpenedStyles}`;

    const hamburgerMenuIcon = "/assets/hamburger-menu.svg";
    const menuCloseIcon = "/assets/close.svg";
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-gray-900">
            <nav className="flex flex-col md:flex-row justify-between px-4 py-8">

                <div className="flex container justify-between cursor-pointer md:w-auto">
                    <h1>Abiade Abdulazeez</h1>
                    <div 
                    className="toggler md:hidden w-8 h-8 z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img className="container" src={isMenuOpen ? menuCloseIcon : hamburgerMenuIcon} alt="Menu" />
                    </div>
                </div>
                

                <ul className={isMenuOpen ? menuOpenedStyles : menuClosedStyles}>

                    <li><a href="#" className="text-gray-200 hover:text-slate-600">About me</a></li>
                    <li><a href="#" className="text-gray-200 hover:text-slate-600">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;