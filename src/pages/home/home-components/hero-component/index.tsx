import "../../../../App.css";
import heroImg from "../../../../assets/images/Home/Hero-Img/heroImg.png";


function HeroComponent() {
  return (
    <main className="flex justify-center relative min-h-screen   ">
       <span className="absolute h-full w-full bg-no-repeat z-20 Ellipse"></span>
 <div>
  <div>
   <span className="absolute h-[30%] top-[1rem] left-[7rem] w-1 bg-no-repeat z-20 bgLine"></span>
      <span className="absolute h-[30%] top-[14rem] left-[7rem] w-1 bg-no-repeat z-20 bgLine"></span>
      <span className="absolute h-[30%] top-[12rem] left-[5rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[12rem] left-[14vw] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[12rem] left-[20vw] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>

      <span className="absolute h-[30%] top-[27rem] left-[7rem] w-1 bg-no-repeat z-20 bgLine"></span>
      <span className="absolute h-[30%] top-[53vh] left-[6vw]  w-1 bg-no-repeat z-30 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[53vh] left-[16vw]  w-1 bg-no-repeat z-30 bgLine rotate-90"></span>

      <span className="absolute h-[30%] top-[4rem] left-[299px] w-1 bg-no-repeat z-30 bgLine"></span>
      <span className="absolute h-[30%] top-[2rem] left-[360px] w-1 bg-no-repeat z-20 bgLine"></span>
      <span className="absolute h-[30%] top-[4rem] left-[6vw] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[4rem] left-[16vw] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>

      <span className="absolute h-[30%] top-[65vh] left-[10rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[65vh] left-[1rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[65vh] left-[24rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[76vh] left-[380px] w-1 bg-no-repeat z-30 bgLine"></span>
      <span className="absolute h-[30%] top-[71vh] left-[441px] w-1 bg-no-repeat z-30 bgLine"></span>

      <span className="absolute h-[30%] top-[45vh] left-[5rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[45vh] left-[19rem] w-1 bg-no-repeat z-20 bgLine rotate-90"></span>
      <span className="absolute h-[30%] top-[29vh] left-[24rem] w-1 bg-no-repeat z-20 bgLine"></span>
      <span className="absolute h-[30%] top-[49vh] left-[24rem] w-1 bg-no-repeat z-20 bgLine"></span>
   </div>

      <span
        className="absolute h-[17.5rem] top-[15rem] left-[7rem] w-[17.5rem] bg-no-repeat z-20 GroupOne"></span>

      <div>
        <span
          className="absolute h-[44%] top-0 left-[70vw] w-[29%] bg-no-repeat z-20 EllipseTwo">            
          </span>
        <span
          className="absolute h-[80%] top-0 left-[75vw] w-[24%] bg-no-repeat z-20 Vector"
        ></span>
      </div>

      <div>
        <span
          className="absolute h-[18%] w-[11%]  top-[5rem] left-[0] bg-no-repeat z-20 EllipseOne"></span>
        <span
          className="absolute h-[33%] w-[19%]  top-[5rem] left-0  bg-no-repeat z-20 GroupTwo"
        ></span>
      </div>

      <div>
        <span
          className="absolute h-[14%] w-[11%]  top-[27rem]  left-[47px]  bg-no-repeat z-20 EllipseThree"
        ></span>
        <span
          className="absolute  h-[14%] w-[11%]  top-[27rem]  left-[7rem]  bg-no-repeat z-20 IntersectSecOne"></span>
      </div>

      <div>
        <span
          className="absolute  h-[13%] w-[10%] top-[47rem] left-[20rem]  bg-no-repeat z-20 EllipseFour"></span>
        <span
          className="absolute h-[13%] w-[10%] top-[47rem] left-[20rem]  bg-no-repeat z-20 IntersectSecTwo"></span>
      </div>

      <div>
        <span
          className="absolute h-[35%] top-[5.25rem] left-[15rem] w-[19%]  bg-no-repeat z-20 EllipseFour"></span>
        <span
          className="absolute h-[35%] top-[5.25rem] left-[15rem] w-[19%] bg-no-repeat z-20 IntersectSecThree"></span>
      </div>

      <span
        className=" absolute  right-1/4 bottom-0 VectorSecOne  "
       ></span>
 </div>
      <section className=" container  ">
        <div className=" absolute bottom-[6.5rem] right-[3.25rem] grid grid-cols-2 w-full grid-flow-row  z-40 ">
          <div className="relative">
            <div className="absolute  bottom-1/4 left-1/4 ">
              <p>
                Looking to enhance your online presence? We offer top-notch
                digital growth services to help your your brand stand out in the
                digital world.
              </p>
              <h1 className="font-semibold text-6xl">
                Elevate your Online presence
              </h1>
            </div>
          </div>
          <div className="">
            <img src={heroImg} alt="heroImg" className="pl-[15rem  " />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroComponent;
