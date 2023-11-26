const Header = () => {
    return (
        <header className="w-screen bg-gray-900">
            <nav className="flex justify-between px-4 py-8">

                <div className="flex container justify-between cursor-pointer md:w-auto">
                    <h1>Abiade Abdulazeez</h1>
                    <div className="toggler md:hidden w-8 h-8 z-50">
                        <img className="container" src="/assets/hamburger-menu.svg" alt="Menu" />
                    </div>
                </div>
                

                <ul className="hidden flex-col md:flex-row md:flex gap-8">

                    <li><a href="#">About me</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;