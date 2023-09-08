import { Button, Navbar } from "flowbite-react";
import logo from "../../../assets/images/izhtech-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export function HeaderNavigationMenu() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    const currentPathname = location.pathname;
    if (currentPathname === "/" || currentPathname === "/home") {
      setActiveLink("home");
    } else if (currentPathname === "/about") {
      setActiveLink("about");
    } else if (currentPathname === "/service") {
      setActiveLink("service");
    } else if (currentPathname === "/contact") {
      setActiveLink("contact");
    }
  }, [location]);
  return (
    <main className="flex justify-center ">
      <section className=" container  absolute z-10">
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            <img alt="Flowbite React Logo" className=" h-20 w-28 " src={logo} />
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button className="bg-black ">Let's Talk</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link
              className={activeLink === "home" ? "text-blue-500" : ""}
              to={"/home"}
            >
              {" "}
              Home
            </Link>

            <Link
              className={activeLink === "about" ? "text-blue-500" : ""}
              to={"/about"}
            >
              {" "}
              About
            </Link>

            <Link
              className={activeLink === "service" ? "text-blue-500" : ""}
              to={"/service"}
            >
              {" "}
              Service
            </Link>

            <Link
              className={activeLink === "contact" ? "text-blue-500" : ""}
              to={"/contact"}
            >
              {" "}
              Contact
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <hr />
      </section>
    </main>
  );
}
