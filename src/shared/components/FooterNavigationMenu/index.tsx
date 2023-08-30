import { Footer } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import footerLogo from "../../../assets/images/footer-logo.png";
export function FooterNavigationMenu() {
  return (
    <main>
      <section className="bg-black">
        <Footer
          container
          className="bg-black w-full "
        >
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 p-6">
              <div className="grid pl-8 ">
                <Footer.Brand
                  alt="Footer Logo"
                  href=""
                  name=""
                  src={footerLogo}
                  className="h-20 w-28 "
                />
                <div className="flex justify-evenly ">
                  <Footer.LinkGroup className="text-slate-50">
                    <Footer.Link href="#">Fb.</Footer.Link>
                    <Footer.Link href="#">/Ig.</Footer.Link>
                    <Footer.Link href="#">/Tw.</Footer.Link>
                    <Footer.Link href="#">/Bg.</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-slate-50">
                <div className="mb-6 text-sm font-semibold text-slate-50">
                  <Footer.Title title="Singapore" className="text-slate-50" />
                  <p>
                    Head Office <br />
                    Flora Drive,Singapore <br />
                    506889.
                  </p>
                </div>
                <div className="mb-6 text-sm font-semibold text-slate-50">
                  <Footer.Title
                    title="Work inquiries"
                    className="text-slate-50"
                  />
                  <p>Interested in working with us?</p>
                  <Footer.LinkGroup col className="text-slate-50">
                    <Footer.Link href="#">hello@izhtech.com</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="mb-6 text-sm font-semiboldtext-slate-50">
                  <form className="flex max-w-md flex-col gap-4 mb-6 text-sm font-semiboldtext-slate-50">
                    <div
                      className=" grid
      "
                    >
                      <div className="mb-2 ">
                        <Label
                          htmlFor="email"
                          value="Sign up for the newsletter"
                          className=" mb-6 text-sm font-semibold text-slate-50"
                        />
                      </div>
                      <div className="flex  rounded-r-lg">
                        <TextInput
                          id="email"
                          placeholder="yoy@domain.com"
                          required
                          type="email"
                          style={{ backgroundColor: "transparent" }}
                        />
                        <Button
                          type="submit"
                          color="dark"
                          className="block border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm rounded-lg"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <Checkbox
                        id="agree"
                        className="bg-black self-start text-slate-50"
                      />
                      <Label
                        className="flex mb-6 text-sm font-semibold text-slate-50"
                        htmlFor="agree"
                      >
                        <p className="text-slate-50">
                          I’m okay with getting emails and having that activity
                          tracked to improve my experience.
                        </p>
                      </Label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between p-8 ">
              <Footer.Copyright
                by="izh tech"
                href="#"
                year={2022}
                className="text-slate-50"
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                <Footer.LinkGroup className="text-slate-50">
                  <Footer.Link href="#">Sitemap</Footer.Link>
                  <Footer.Link href="#">Security</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms of Service</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </Footer>
      </section>
    </main>
  );
}
