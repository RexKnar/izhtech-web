import mediaOne from "../../../../assets/images/AboutUs/our Team/Media.png";
import mediaTwo from "../../../../assets/images/AboutUs/our Team/Media (1).png";
import mediaThree from "../../../../assets/images/AboutUs/our Team/Media (2).png";
import mediaFour from "../../../../assets/images/AboutUs/our Team/Media (3).png";
import mediaFive from "../../../../assets/images/AboutUs/our Team/Media (4).png";
import mediaSix from "../../../../assets/images/AboutUs/our Team/Media (5).png";
import Fb from "../../../../assets/images/AboutUs/our Team/fb.png";
import Youtube from "../../../../assets/images/AboutUs/our Team/yoytube.png";
import Be from "../../../../assets/images/AboutUs/our Team/Be.png";
import { AiOutlineArrowRight } from "react-icons/ai";
function OurTeam() {
  return (
    <main>
      <section>
        <section className="flex justify-center pt-11">
          <div className=" container  pt-16 pb-10 ">
            <h4 className=" uppercase font-semibold">Our team</h4>
            <h1 className="font-bold text-4xl pt-4">Meet the team.</h1>
          </div>
        </section>

        <section className="grid grid-cols-4 w-full text-1xl">
          <div className="bg-black text-white flex flex-col justify-end gap-4 p-6">
            <div>
              <h1 className=" font-bold pb-2 text-3xl">Colin Lucido</h1>
              <h3>
                UI Designer ·
                <span className=" font-semibold">Interactive Media</span>
              </h3>
            </div>
            <p className="pr-16">
              George is an architect and founding partner, providing flexible
              digital services.
            </p>
            <div className="flex gap-3">
              <a href="">
                {" "}
                <img src={Fb} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={Youtube} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={Be} alt="" />{" "}
              </a>
            </div>
          </div>

          <div>
            <img src={mediaOne} alt="" className=" min-w-full" />
          </div>

          <div>
            <img src={mediaTwo} alt="" className=" min-w-full" />
          </div>

          <div>
            <img src={mediaThree} alt="" className=" min-w-full" />
          </div>

          <div>
            <img src={mediaFour} alt="" className=" min-w-full" />
          </div>

          <div className="bg-black text-white flex flex-col justify-end gap-4 p-6">
            <div>
              <h1 className=" font-bold pb-2 text-3xl">Colin Lucido</h1>
              <h3>
                UI Designer ·{" "}
                <span className=" font-semibold">Interactive Media</span>
              </h3>
            </div>
            <p className="pr-16">
              George is an architect and founding partner, providing flexible
              digital services.
            </p>
            <div className="flex  gap-3">
              <a href="">
                {" "}
                <img src={Fb} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={Youtube} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={Be} alt="" />{" "}
              </a>
            </div>
          </div>

          <div>
            <img src={mediaFive} alt="" className=" min-w-full" />
          </div>

          <div>
            <img src={mediaSix} alt="" className=" min-w-full" />
          </div>
        </section>

        <section className=" bg-black text-white flex justify-center">
          <div className="container pt-20 pb-20">
            <div className=" grid grid-flow-col col-span-2 pb-8 justify-between">
              <div className=" grid gap-4">
                <p className=" font-semibold uppercase text-[#91929B]">
                  Let’s Collaborate
                </p>
                <h1 className="text-4xl font-bold">
                  Send us an email,
                  <br /> to discuss a new project.
                </h1>
              </div>

              <div>
                <button className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center rounded pl-1 pr-1 ">
                  <span className="p-2 text-[#fefdff]">Contact Us</span>{" "}
                  <AiOutlineArrowRight className="text-[#fefdff]" />
                </button>
              </div>
            </div>
            
            <hr />

            <div className="grid grid-flow-col col-span-2 pt-6">
              <div className="pr-[50vw]">
                <p className="text-[#91929B]">
                  We're{" "}
                  <span className="font-semibold">a team of creatives</span> who
                  are excited about unique ideas and help digital and fin-tech
                  companies
                  <span className="font-semibold">
                    to create amazing identity.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default OurTeam;
