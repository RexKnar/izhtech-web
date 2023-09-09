import "../../../../App.css";
import GuideCard from "../guideCard-component";
import {cardValue} from '../../tsFile/index'

function GuideComponent() {

  
  return (
    <main className="relative flex justify-center">
      <span className="absolute bottom-[10vh] left-0 h-full bg-contain min-h-screen w-[38%] guideBg bg-no-repeat"></span>
      <section className="container pt-16  z-30">
        <div className="grid grid-flow-row grid-cols-3 gap-[3vh] ">
          <div className="col-span-2 grid leading-3 w-[20vw] h-[42vh] gap-5 ">
            <h5 className="font-bold ">FROM THE BLOG</h5>
            <h1 className="text-5xl font-bold ">
              Quick and neat, just like your work.
            </h1>
            <p className="leading-[1.5rem]">
              Our app works for businesses of all sizes and shapes. Starting at
              just <b>$5 for an agent</b>.
            </p>
            <div><button className=" bg-transparent border-2 p-1 border-black rounded">
              <b>Read all Guides</b>
            </button></div>
          </div>
          {cardValue.map((item) => (
                        <GuideCard cartValue={item}  />
                    ))}
      
        </div>
      </section>
    </main>
  );
}

export default GuideComponent;
