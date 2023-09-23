import { Card } from "flowbite-react";
import "../../../../App.css";
import datatrackingImg from "../../../../assets/images/Home/datatracking/Column.png";

function Datatracking() {
  return (
    <main className="flex justify-center relative ">
      <span className="VectorDatatracking absolute top-[16rem] right-0 h-[39vh] w-[18vw] z-40"></span>
      <section className="container ">
        <Card className="md:pl-6 md:pr-11  md:pt-11 md:pb-11 bg-[#F5F1F5] ">
          <div className=" grid lg:grid-cols-2  ">
            <div className="rounded rounded-l">
              <img src={datatrackingImg} alt=""className=" rounded" />
            </div>
            <div>
              <div className="pt-[2rem] pb-[2rem] ">
                <h5 className="pb-8 font-bold">
                  THE Number one #datatracking app
                </h5>
                <h1 className="font-bold text-5xl pb-6 md:text-left lg:w-[28vw] ">
                  Keep pushing forward. We've got your back.
                </h1>
                <p className="pb-2 lg:w-[20vw]  md:text-left">
                  So how does it work? Let’s check our <b>Getting Started</b>{" "}
                  tutorial or contact us for a demo.
                </p>
              </div>
              <div className="grid grid-flow-col grid-cols-2 gap-6 justify-center  md:justify-start ">
                <div className="md:w-[184px] md:h-[102px]  ">
                  <hr className="border-top-2 border-black" />
                  <p>
                    <span className="font-bold text-5xl">36</span>
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500 font-bold text-3xl ">
                      +
                    </span>
                    <br />
                    designers and developers
                  </p>
                </div>
                <div className=" md:w-[184px] md:h-[102px] ">
                  <hr className="border-top-2 border-black  " />
                  <p>
                    <span className="font-bold text-5xl">345</span>
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500 font-bold text-center text-3xl">
                      +
                    </span>{" "}
                    <br />
                    live promo campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default Datatracking;
