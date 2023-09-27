import "../../../../App.css";
import GuideCard from "../guideCard-component";
import { cardValue } from "../../tsFile/index";

function GuideComponent() {
  return (
    <main className="relative flex justify-center">
      <span className="absolute bottom-[10vh] left-0 h-full bg-contain min-h-screen w-[38%] guideBg bg-no-repeat"></span>
      <section className="container lg:pt-16 pt-3  z-30">
        <div className="grid grid-flow-row lg:grid-cols-3 lg:gap-[3vh] gap-9 md:p-7 p-6 lg:p-0">
          <div className="lg:col-span-2 lg:grid leading-3 lg:w-[20vw] lg:h-[42vh] gap-5  ">
            <h5 className="font-bold ">FROM THE BLOG</h5>
            <h1 className="text-3xl lg:text-5xl font-bold pt-3 lg:pt-0 ">
              Quick and neat, just like your work.
            </h1>
            <p className="leading-[1.5rem] pt-3">
              Our app works for businesses of all sizes and shapes. Starting at
              just <b>$5 for an agent</b>.
            </p>
            <div className="pt-3 ">
              <button className=" bg-transparent border-2 p-2 border-black rounded">
                <b>Read all Guides</b>
              </button>
            </div>
          </div>
          {cardValue.map((item) => (
            <GuideCard cartValue={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default GuideComponent;
