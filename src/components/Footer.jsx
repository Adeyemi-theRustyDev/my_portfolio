const Footer = () => {
    return (
        <footer className="w-screen bg-black">
            <p className="text-center">&copy; Abiade Abdulazeez | 2023</p>

            {/* Mail box */}
            <p>Send me a mail @ <span className="underline">mailIcon</span></p>

            <p>Or contact at: </p>
            {/* Socials */}
            <ul className="flex flex-row list-none justify-between">
                <li>
                    <a href="#">Github</a>
                </li>
                <li>
                    <a href="#">Twitter</a>
                </li>
                <li>
                    <a href="#">Linkedin</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">Facebook</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;