import FwaImg from "../../../../assets/images/AboutUs/aboutAward/FWA.png";
import WImg from "../../../../assets/images/AboutUs/aboutAward/W.png";
import WebbyImg from "../../../../assets/images/AboutUs/aboutAward/webby.png";
import Diamond from "../../../../assets/images/AboutUs/aboutAward/diamond.png";
import Square from "../../../../assets/images/AboutUs/aboutAward/square.png";

function AboutAward() {
  return (
    <main>
      <section className="flex justify-center">
        <div className="container ">
          <div className="grid grid-flow-col grid-cols-3 gap-24 pt-24 pb-20">
            <div className="pr-36">
              <p className=" font-semibold">AWARDS & HONORS</p>
              <h1 className="text-5xl font-bold pt-4  ">
                The awards won by our works.{" "}
              </h1>
            </div>

            <div className="flex ">
              <p className="pr-36">
                When our team provides design and digital marketing. Applied
                arts can include{" "}
                <b>industrial design, graphic design, fashion design,</b> and
                the decorative arts which traditionally includes craft objects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 items-baseline content-end">
              <div className="p-4">
                <img src={WImg} alt="" />
                <p className="pt-4">5x Developer Award</p>
              </div>
              <div className="p-4">
                <img src={WImg} alt="" />
                <p className="pt-4">3x Website of the Day</p>
              </div>
              <div className="p-4 ">
                <img src={FwaImg} alt="" />
                <p className="pt-4">2x Best Website</p>
              </div>
              <div className="p-4 ">
                <img src={WebbyImg} alt="" />
                <p className="pt-4 ">2x Best Homepage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="SectionBg  w-full h-[50rem] bg-no-repeat flex justify-center">
          <div className="flex justify-end items-end container">
            <div className=" bg-red-600 text-white grid justify-center  p-10 pr-32">
              <div className="flex items-center ">
                <img src={Diamond} alt="" />
                <h1 className="font-bold text-4xl">35+</h1>
              </div>
              <p className="pt-2">
                designers <br /> and developers
              </p>
            </div>

            <div className=" bg-black text-white grid justify-center  p-[37px] pr-32">
              <div className="flex items-center ">
                <img src={Square} alt="" />
                <h1 className="font-bold text-4xl">28+</h1>
              </div>
              <p className="pt-2">
                awards for digital <br /> innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutAward;
