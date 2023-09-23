import { Button, Checkbox, Label, TextInput, Footer } from "flowbite-react";
import footerLogo from "../../../assets/images/footer-logo.png";
import { useForm } from "react-hook-form";
export function FooterNavigationMenu() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <main className="flex lg:justify-center bg-black ">
      <section className="bg-black container flex lg:justify-around z-40">
        <Footer container className="bg-black w-full ">
          <div className="w-full">
            <div className="grid w-full  items-center sm:items-start  lg:flex lg:justify-between  md:grid-cols-1 lg:p-6">
              <div className="grid lg:pr-16  pb-3 md:pb-0 ">
                <Footer.Brand
                  alt="Footer Logo"
                  href=""
                  name=""
                  src={footerLogo}
                  className="h-20 w-30 "
                />
                <div className="pt-2 ">
                  <Footer.LinkGroup className="text-slate-50 !flex-nowrap">
                    <Footer.Link href="#">Fb.</Footer.Link>
                    <Footer.Link href="#">/Ig.</Footer.Link>
                    <Footer.Link href="#">/Tw.</Footer.Link>
                    <Footer.Link href="#">/Bg.</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:justify-around lg:ml-20 gap-2 sm:mt-4 lg:grid-cols-3 md:gap-6 text-slate-50">
                <div className="mb-2 text-sm font-semibold text-slate-50">
                  <Footer.Title title="Singapore" className="text-slate-50" />
                  <p className="text-[#FFFFFFBF]">
                    Head Office <br />
                    Flora Drive,Singapore <br />
                    506889.
                  </p>
                </div>
                <div className="mb-2 text-sm font-semibold text-[#FFFFFFBF]">
                  <Footer.Title
                    title="Work inquiries"
                    className="text-[#FFFFFFBF]"
                  />
                  <p className="text-[#FFFFFFBF]">
                    Interested in working with us?
                  </p>
                  <Footer.LinkGroup col className="text-[#FFFFFFBF]">
                    <Footer.Link href="#">hello@izhtech.com</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className="mb-2 text-sm font-semiboldtext-slate-50 md:col-span-2 lg:col-span-1">
                  <form
                    className="grid md:grid-cols-2 lg:grid-cols-1 lg:max-w-md  gap-2 lg:mb-6 text-sm font-semiboldtext-slate-50"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className=" grid ">
                      <div className="mb-2 ">
                        <Label
                          htmlFor="email"
                          value="Sign up for the newsletter"
                          className=" mb-6 text-sm font-semibold text-slate-50"
                        />
                      </div>
                      <Button.Group className="flex text-center">
                        <TextInput
                          placeholder="yoy@domain.com"
                          type="email"
                          style={{
                            backgroundColor: "#1f2937",
                            color: "white",
                            border: "none",
                          }}
                          {...register("email", { required: true })}
                        />
                        <Button
                          type="submit"
                          color="dark"
                          className="flex items-center border-none rounded disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-slate-50  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 text-sm  "
                        >
                          Sign Up
                        </Button>
                      </Button.Group>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <Checkbox
                        id="agree"
                        className="bg-black self-start text-slate-500"
                        {...register("agree", { required: true })}
                      />
                      <Label
                        className="flex mb-6 text-sm font-semibold text-slate-50"
                        htmlFor="agree"
                      >
                        <p className="text-[#60606B]">
                          I’m okay with getting emails and having that activity
                          tracked to improve my experience.
                        </p>
                      </Label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer.Divider className=" border-gray-600 " />
            <div className="w-full sm:flex sm:items-center  sm:justify-between p-6 ">
              <Footer.Copyright
                by="izh tech 2023 All rights reserved."
                href="#"
                className="text-[#FFFFFFBF]"
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                <Footer.LinkGroup className="text-[#FFFFFFBF]">
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
