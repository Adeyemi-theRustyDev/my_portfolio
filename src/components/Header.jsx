import { useState } from "react";

const Header = () => {
    const menuOpenedStyles = "nav-list";
    const menuClosedStyles = "nav-list-hidden";

    const hamburgerMenuIcon = "/assets/hamburger-menu.svg";
    const menuCloseIcon = "/assets/close.svg";

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
            <header className="flex">
                <div>
                    <h1><a href="/">Abdulazeez Abiade</a></h1>

                    <div
                        className="toggler"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img  src={isMenuOpen ? menuCloseIcon : hamburgerMenuIcon} alt="Menu" />
                    </div>
                </div>
                <ul className={isMenuOpen ? menuOpenedStyles : menuClosedStyles} >
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/my_portfolio.pdf" download="my_portfolio.pdf">Download CV</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;