import { Button, Navbar } from "flowbite-react";
import logo from "../../../assets/images/izhtech-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
export function HeaderNavigationMenu() {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (link:string) => {
    setActiveLink(link);
  };
  return (
    <main>
      <section>
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            <img
              alt="Flowbite React Logo"
              className="mr-3 h-32 w-16 sm:h-9"
              src={logo}
            />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Let's Talk</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link
              className={activeLink === "home" ? "text-blue-500" : ""}
              to={"/home"}
              onClick={() => handleLinkClick("home")}
            >
              {" "}
              Home
            </Link>

            <Link
              className={activeLink === "about" ? "text-blue-500" : ""}
              to={"/about"}
              onClick={() => handleLinkClick("about")}
            >
              {" "}
              About
            </Link>

            <Link
              className={activeLink === "service" ? "text-blue-500" : ""}
              to={"/service"}
              onClick={() => handleLinkClick("service")}
            >
              {" "}
              Service
            </Link>

            <Link
              className={activeLink === "contact" ? "text-blue-500" : ""}
              to={"/contact"}
              onClick={() => handleLinkClick("contact")}
            >
              {" "}
              Contact
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </main>
  );
}
