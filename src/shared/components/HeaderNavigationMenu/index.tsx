import { Button, Navbar } from "flowbite-react";
import logo from "../../../assets/images/izhtech-logo.png";
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
            <Button className='bg-black'>Let's Talk</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link active href='/home'>
              Home
            </Navbar.Link>
            <Navbar.Link href='/about'>
              About
            </Navbar.Link>
            <Navbar.Link href='/service'>
             Service
            </Navbar.Link>
            <Navbar.Link href='/contact'>
             Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </main>
  );
}
