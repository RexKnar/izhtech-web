import { Carousel } from "flowbite-react";
import { AiOutlineArrowRight } from "react-icons/ai";
function AboutTestimonial() {
  return (
    <main className="grid grid-flow-col  justify-center bg-black ">
      <section className="container pt-16 pb-16">
        <div className="flex ">
          <div>
            <p className="pb-5 uppercase text-[#c3c3c4]">Testimonials</p>
            <hr className="border-[#60606B]" />
            <h1 className="text-5xl pt-5 font-bold text-[#fefdff]">
              What our clients say about our studio.
            </h1>
            <div className="pt-16 pb-20">
              <button className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center rounded pl-1 pr-1 ">
                <span className="p-2 text-[#fefdff]">More Reviews</span>{" "}
                <AiOutlineArrowRight className="text-[#fefdff]" />
              </button>
            </div>
          </div>

          <div className="p-6 flex ">
            <Carousel className=" h-auto  w-[47vw] ">
              <div className="grid grid-flow-row text-start justify-center h-auto w-auto text-white ">
                <h3 className="text-[#91929B] w-fit p-2 space-2 bg-[#90919C26] ">
                  Customer Support
                </h3>
                <p className="text-[#91929B] pb-6 pt-3">
                  “5 stars WordPress template! If anyone wants an example of
                  what you can do with this theme. I tell you what, there has
                  never been an issue that Cory from the colabrio support team
                  hasn't been able to solve for me.”{" "}
                </p>
                <h1 className="font-bold pb-2">Colin Lucido</h1>
                <p className="text-[#91929B] pb-16">
                  UI Designer ·<b>Interactive Media</b>{" "}
                </p>
              </div>

              {/* <div className="flex h-full items-center justify-center dark:text-white">
                Slide 2
              </div>

              <div className="flex h-full items-center justify-center dark:text-white">
                Slide 3
              </div> */}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutTestimonial;
