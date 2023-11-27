const Footer = () => {
  return (
    <footer className="w-screen bg-gray-900 fixed bottom-0 pt-4">
      <p className="text-center text-xl">&copy; Abiade Abdulazeez | 2023</p>

      {/* Mail box */}
      <p className="p-4">
        Send me a mail @ <span className="underline">mailIcon</span>
      </p>

      {/* Socials */}
      <ul className="flex flex-row list-none justify-between p-4 md:p-8 ">
        <li>
          <a href="#">
            <img src="/assets/github.png" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/twitter.png" alt="Twitter logo" />
          </a>
        </li>
        {/* <li>
          <a href="#">
            <img src="/assets/linkedin.png" alt="Github logo" />
          </a>
        </li> */}
        <li>
          <a href="#">
            <img src="/assets/instagram.png" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/facebook.png" alt="Github logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
