import "../../../../App.css";
import heroImg from "../../../../assets/images/Home/Hero-Img/heroImg.png";

function HeroComponent() {
  return (
    <main className="flex justify-center relative min-h-screen  ">
      <div className="hidden  lg:flex top-1/2 right-6 rotate-[-90deg] fixed ">
        <h3 className=" font-bold">
          Follow Us -<a href=""> /Bg.</a>
          <a href="">/Ig</a>
          <a href="">/Tw</a>
        </h3>
      </div>
      <div className="hidden lg:hidden sm:block">
        <span className="absolute h-[100%] w-[100%] bg-no-repeat Ellipse"></span>
      </div>
      <div className="hidden lg:block">
        <div>
          <span className="absolute h-[100%] w-[90%] bg-no-repeat Ellipse"></span>
          <span className="absolute h-[30%] top-0 left-[7rem] w-1 bg-no-repeat bgLine"></span>
          <span className="absolute h-[30%] top-[14rem] left-[7rem] w-1 bg-no-repeat bgLine"></span>
          <span className="absolute h-[30%] top-[12rem] left-[5rem] w-1 bg-no-repeatbgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[12rem] left-[14vw] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[12rem] left-[20vw] w-1 bg-no-repeatbgLine rotate-90"></span>

          <span className="absolute h-[30%] top-[27rem] left-[7rem] w-1 bg-no-repeat bgLine"></span>
          <span className="absolute h-[30%] top-[53vh] left-[6vw]  w-1 bg-no-repeat bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[53vh] left-[16vw]  w-1 bg-no-repeat bgLine rotate-90"></span>

          <span className="absolute h-[30%] top-[4rem] left-[299px] w-1 bg-no-repeat  bgLine"></span>
          <span className="absolute h-[30%] top-[2rem] left-[360px] w-1 bg-no-repeat  bgLine"></span>
          <span className="absolute h-[30%] top-[4rem] left-[6vw] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[4rem] left-[16vw] w-1 bg-no-repeat bgLine rotate-90"></span>

          <span className="absolute h-[30%] top-[65vh] left-[10rem] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[65vh] left-[1rem] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[65vh] left-[24rem] w-1 bg-no-repeat bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[76vh] left-[380px] w-1 bg-no-repeat  bgLine"></span>
          <span className="absolute h-[30%] top-[71vh] left-[441px] w-1 bg-no-repeat  bgLine"></span>

          <span className="absolute h-[30%] top-[45vh] left-[5rem] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[45vh] left-[19rem] w-1 bg-no-repeat  bgLine rotate-90"></span>
          <span className="absolute h-[30%] top-[29vh] left-[24rem] w-1 bg-no-repeat bgLine"></span>
          <span className="absolute h-[30%] top-[49vh] left-[24rem] w-1 bg-no-repeatbgLine"></span>
        </div>
        <span className="absolute h-[17.5rem] top-[15rem] left-[7rem] w-[17.5rem] bg-no-repeat GroupOne"></span>
        <div>
          <span className="absolute h-[45%] top-0 right-0 w-[27%] bg-no-repeat EllipseTwo"></span>
          <span className="absolute h-[60%] top-0 right-0 w-[23%] bg-no-repeat  Vector"></span>
        </div>
        <div>
          <span className="absolute h-[18%] w-[11%]  top-[5rem] left-[0] bg-no-repeat  EllipseOne"></span>
          <span className="absolute h-[33%] w-[19%]  top-[5rem] left-0  bg-no-repeat  GroupTwo"></span>
        </div>
        <div>
          <span className="absolute h-[14%] w-[11%]  top-[27rem]  left-[47px]  bg-no-repeat  EllipseThree"></span>
          <span className="absolute  h-[14%] w-[11%]  top-[27rem]  left-[7rem]  bg-no-repeat  IntersectSecOne"></span>
        </div>
        <div>
          <span className="absolute  h-[13%] w-[10%] top-[47rem] left-[20rem]  bg-no-repeat  EllipseFour"></span>
          <span className="absolute h-[13%] w-[10%] top-[47rem] left-[20rem]  bg-no-repeat  IntersectSecTwo"></span>
        </div>
        <div>
          <span className="absolute h-[35%] top-[5.25rem] left-[15rem] w-[19%]  bg-no-repeat z-20 EllipseFour"></span>
          <span className="absolute h-[35%] top-[5.25rem] left-[15rem] w-[19%] bg-no-repeat z-20 IntersectSecThree"></span>
        </div>
        <span className=" absolute  right-1/4 bottom-0 VectorSecOne  "></span>
      </div>
      <section className=" container relative ">
        <div className="  absolute md:top-[10rem] md:left-[3px] grid  w-full grid-flow-row justify-center  z-40  md:grid-cols-2 top-1 left-1 p-6 lg:p-0  pt-[17vh] sm:pt-0 ">
          <div className="relative flex justify-center lg:pt-26 md:pt-o ">
            <span className="lg:hidden absolute bottom-[0vh] left-0 bg-contain h-[85%] w-[100%] guideBg bg-no-repeat"></span>
            <div className="grid content-center lg:pt-[32vh] z-20 ">
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
          <div className="flex justify-center items-start  pt-4">
            <img src={heroImg} alt="heroImg" className=" " />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroComponent;
