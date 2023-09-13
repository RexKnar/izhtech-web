import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
function AboutTestimonial() {
  return (
    <main className="flex justify-center bg-black">
      <section className="container ">
        <div>
          <div>
            <p className=" uppercase text-[#c3c3c4]">Testimonials</p>
            <h1 className="text-5xl font-bold text-[#fefdff]">
              What our clients say about our studio.
            </h1>
            <div>
            <button className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center rounded pl-1 pr-1 ">
              <span className="p-2 text-[#fefdff]">More Reviews</span> <AiOutlineArrowRight className='text-[#fefdff]' />
            </button>
            </div>
          
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}

export default AboutTestimonial;
