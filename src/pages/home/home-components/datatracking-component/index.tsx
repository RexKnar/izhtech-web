import { Card } from "flowbite-react";
import "../../../../App.css";
import datatrackingImg from "../../../../assets/images/Home/datatracking/Column.png";

function Datatracking() {
  return (
    <main className="flex justify-center relative ">
      <span className="VectorDatatracking absolute top-[16rem] right-0 h-[39vh] w-[18vw] z-40"></span>
      <section className="container f">
        <Card className="pl-6 pr-11  pt-11 pb-11 bg-[#F5F1F5]">
          <div className=" grid grid-cols-2 ">
            <div className="rounded rounded-l">
              <img src={datatrackingImg} alt="" />
            </div>
            <div>
              <div className="pt-[2rem] pb-[2rem] ">
                <h5 className="pb-8 font-bold">
                  THE Number one #datatracking app
                </h5>
                <h1 className="font-bold text-5xl pb-6 text-left w-[28vw]">
                  Keep pushing forward. We've got your back.
                </h1>
                <p className="pb-2 w-[20vw]">
                  So how does it work? Let’s check our <b>Getting Started</b>{" "}
                  tutorial or contact us for a demo.
                </p>
              </div>
              <div className="grid grid-flow-col grid-cols-2  justify-start ">
                <div className="w-[184px] h-[102px]  ">
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
                <div className=" w-[184px] h-[102px] ">
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
