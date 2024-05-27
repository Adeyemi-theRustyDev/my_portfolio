import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin, FaAddressCard } from "react-icons/fa6";
import { BiArrowToBottom } from "react-icons/bi";
const Home = () => {
    return (
        <>
            <section id="about">
                <h2>About Me</h2>
                <p>I am a software developer specializing in backend and server-side technologies. With expertise in C#,
                    Python, Golang, and TypeScript/JavaScript, I excel in building robust and scalable server-side
                    applications. Currently, I focus on Golang and TypeScript/JavaScript with the Node.js runtime, and I am
                    exploring the Rust programming language.</p>
                {/* <p>I am a Software Developer who loves to craft new worlds through code</p> */}
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Languages: C#, Python, Golang, TypeScript/JavaScript, Rust (learning)</li>
                    <li>Frameworks: Express (Node.js), Bun tooling</li>
                    <li>Databases: MongoDB, MySQL, PostgreSQL (learning)</li>
                    <li>Technologies: Web technologies, Server-side and networking technologies</li>
                </ul>
            </section>
            <section id="contact-me">
                <h2 className="flex">Contact Me <FaAddressCard /></h2>
                <span>
                    I am open to collaborations on any  back-end or web projects. <br/>
                    You can contact me by mail @<a href="mailto:abiadeabdulazeez@gmail.com">abiadeabdulazeez@gmail.com</a></span>
                    or on any of the social-media listed below
                <div className="social-icons">

                    <a href="https://github.com/Adeyemi-theRustyDev" target="_blank"><FaGithub /></a>
                    <a href="https://twitter.com/yemiTheDev" target="_blank"> <FaXTwitter /> </a>
                    <a href="https://instagram.com/half_submerged_titan" target="_blank"><FaInstagram /></a>
                    <a href="https://linkedin.com/in/Commandliner" target="_blank"><FaLinkedin /></a>
                </div>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Shaed - Chat App</h3>
                    <p>A chat application built using Socket.io, React.js, Express, Bun, Node.js, and TailwindCSS.</p>
                </div>
                <Link to="/Projects" style={{ display: "flex", justifyContent: "center", fontSize: "5em" }}><BiArrowToBottom /></Link>
            </section>
        </>
    );
}

export default Home;