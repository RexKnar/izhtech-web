import { Button, Navbar } from "flowbite-react";
import logo from "../../../assets/images/izhtech-logo.png";
import { Link } from "react-router-dom";
export function HeaderNavigationMenu() {
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
            <Link to={"/home"}> Home</Link>

            <Link to={"/about"}> About</Link>

            <Link to={"/service"}> Service</Link>

            <Link to={"/contact"}> Contact</Link>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </main>
  );
}
