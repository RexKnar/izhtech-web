import React from "react";
import videoImg from "../../../../assets/images/AboutUs/aboutHeading/Image.png";
import capitalImg from "../../../../assets/images/AboutUs/aboutHeading/Column.png";
import { Button, Progress, Tooltip } from "flowbite-react";

function AboutHeading() {
  return (
    <main className="flex justify-center relative">
      <span className=" absolute right-0 top-0 h-[306px] w-[21vw] z-20 secOneBg"></span>
      <span className=" absolute left-0 top-0 h-[365px] w-[368px] z-20 blueRound"></span>
      <section className=" pt-24">
        <div className="flex flex-col pt-24 ">
          <h1 className="text-5xl font-bold pt-16  ">About Us</h1>
          <h3 className="pt-6 ">
            Leave us a little info, and we’ll be in touch.
          </h3>
          <div className="pt-4 pb-16 ">
            <button className="bg-black text-white rounded p-2">
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div>
            <img src={videoImg} alt="" />
          </div>

          <div className="grid grid-cols-2 gap-32 justify-center ">
            <div className="p-16">
              <h1 className="text-3xl font-bold">Strategy & Art Direction.</h1>
              <p>
                <b>Established stages</b> which reader, taken possession of my
                entire soul, like these sweet mornings of spring of enjoying
                with the theory of ethics.
                <br className="pb-4" />
                Praesent commodo cursus magna, vel scelerisque nisl venenatis
                dapibus posuere velit aliquet.
              </p>
              <div className="grid justify-start ">
                <p>Structured Media Insights</p>
                <Tooltip content="93%" className="  ">
                  <Button className="bg-transparent hover:!bg-transparent !pl-0">
                    <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[296px]">
                      <div className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative"></div>
                    </div>
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className="p-16">
              <h1 className="text-3xl font-bold">Website UX/UI Design.</h1>
              <p>
                Each time when our clients want to porta sem malesuada magna
                mollis euismod.{" "}
                <b> Praesent commodo cursus for the scelerisque.</b>
                Scelerisque nisl consectetur of your posuere erat a ante
                venenatis.
              </p>
            </div>
          </div>

          <div>
            <p className="">Capabilities</p>
            <h1 className="text-3xl font-bold">
              We work in the fields of UI/UX design, interiors, photography and
              art direction.
            </h1>
          </div>

          <div>
            <img src={capitalImg} alt="" />
          </div>

        </div>

        <div className="">
       
        </div>
      </section>
    </main>
  );
}

export default AboutHeading;
