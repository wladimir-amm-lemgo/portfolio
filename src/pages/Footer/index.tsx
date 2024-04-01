import path from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Social from "../../components/Social";
import { useEffect } from "react";
import Quote from "../../components/Quote";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);
  return (
    <footer className="flex justify-evenly py-8 bg-neutral-700 text-white leading-8">
      <ul className="pr-4 md:pr-0">
        <li>
          <Link to={path.HOME}>home</Link>
        </li>
        <li>
          <Link to={path.PROJECTS}>projects</Link>
        </li>
        <li>
          <Link to={path.CONTACT}>contact</Link>
        </li>
        <li>
          <Link to={path.VITA}>vita</Link>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center pr-8 md:pr-0">
        <Logo color="white" path={path.HOME} height={"h-8"} />
        <Quote />
      </div>
      <ul className="pl-2 pr-2 md:pr-0 md:pl-0 flex flex-col items-center justify-center">
        <li>
          <Social media={"Github"} size={"size-6"} />
        </li>
        <li className="pt-4">
          <Social media={"LinkedIn"} size={"size-6"} />
        </li>
        <li className="pt-4">
          <Social media={"Youtube"} size={"size-6"} />
        </li>
        <li className="pt-4">
          <Social media={"Instagram"} size={"size-6"} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
