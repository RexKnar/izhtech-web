import "../../../../App.css";
import videoImg from "../../../../assets/images/Home/videoImg/Fill.png";
import mainVideoImg from "../../../../assets/images/Home/videoImg/Image.png";
import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import mission from "../../../../assets/images/Home/videoImg/mission.png";
import vision from "../../../../assets/images/Home/videoImg/vision.png";
import values from "../../../../assets/images/Home/videoImg/values.png";
function VideoComponent() {
  return (
    <main className="flex justify-center relative z-20 ">
      <span className="absolute h-[57vh] w-[10vw] top-[2rem] left-[41.25rem] bg-no-repeat z-20 Intersect"></span>
      <span className="absolute h-[27vh] w-[10vw] top-[2rem] left-[841px] bg-no-repeat z-20 VectorVd"></span>

      <section className=" container bg-[#f4f8fd] rounded p-8 ">
        <div className=" container grid grid-flow-row grid-cols-3  justify-center justify-items-center pt-[5rem] pb-[1rem] pr-4 pl-5">
          <div className="gap-6 grid justify-start p-6">
            <div className="relative ">
              <img src={videoImg} alt="" />
              <span className="text-4xl text-white absolute top-[30%] left-[7%]">
                <AiFillCaretRight />
              </span>
            </div>

            <p>#datatracking app</p>
            <h1 className="text-4xl font-bold">
              The app is great for basic setup and adjusts.
            </h1>
            <h6>
              So how does it work? Let’s check our <b>Getting Started</b>
              tutorial or contact us for a demo.
            </h6>
            <div>
              <button className="border-2 border-black font-bold rounded p-2">
                Explore Features
              </button>
            </div>
          </div>
          <div className="col-span-2 z-30 ">
            <img src={mainVideoImg} alt="" />
          </div>
        </div>

        <div className="grid grid-flow-col justify-items-center gap-[10vh] p-1 ">
          <div className="columns-3xs ">
            <hr className="border-top-1 border-black p-6" />
            <img src={mission} alt="" className="pb-6" />
            <h1 className="text-2xl font-bold pb-4">Mission</h1>
            <p className="pb-4">
              Untangling Knots to give Clear Digital Solution
            </p>
            <button className="border-2 bg-black text-white border-black rounded flex content-center items-center">
              Read More <AiOutlineArrowRight />
            </button>
          </div>
          <div className="columns-3xs ">
            <hr className="border-top-1 border-black p-6" />
            <img src={vision} alt="" className="pb-6" />
            <h1 className="text-2xl font-bold pb-4">Vision</h1>
            <p className="pb-4">
              Make life simpler by providing complex tech in a simpler way.
            </p>
            <button className="border-1 bg-black text-white border-black rounded flex content-center items-center">
              Read More <AiOutlineArrowRight />
            </button>
          </div>
          <div className="columns-3xs  ">
            <hr className="border-top-2 border-black p-6" />
            <img src={values} alt="" className="pb-6 " />
            <h1 className="text-2xl font-bold pb-4">Values</h1>
            <p className="pb-4">Equally disciplined and relish work ethic.</p>
            <button className="border-2 bg-black text-white border-black rounded flex content-center items-center">
              Read More <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoComponent;
