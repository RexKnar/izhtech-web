import { Footer } from "flowbite-react";
export function FooterNavigationMenu() {
 
  return (
    <main>
      <section>
        <Footer container>
          <Footer.Copyright by="izh tech" href="#" year={2023} />
          <Footer.LinkGroup>
            <Footer.Link href="#" >Sitemap</Footer.Link>
            <Footer.Link href="#">Security</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms of Service</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </section>
    </main>
  );
}
