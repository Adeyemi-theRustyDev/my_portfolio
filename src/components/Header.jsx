const Header = () => {
    return (
        <header className="bg-slate-950 w-screen">
            <nav className="flex justify-between px-4 py-8">
                <h1>Abiade Abdulazeez</h1>

                <ul className="flex flex-col md:flex-row ">

                    <li><a href="#">About me</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;