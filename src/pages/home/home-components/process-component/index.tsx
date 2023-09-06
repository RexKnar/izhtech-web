
import { BsArrowUpRightSquare } from "react-icons/bs";

function ProcessComponent() {
  return (
    <main className="relative flex justify-center">
        <span className=" absolute h-[131px] w-[3vw] top-[208px] right-[435px] redLineOne"></span>
        <span className=" absolute h-[272px] w-[137px] top-[7vh] right-[300px] redLineTwo"></span>
        <span className=" absolute h-[131px] w-[75vw] top-[7vh] left-[2vw] redLineThree"></span>
      <section className="container p-20">
        <div className="pb-8">
          <h5 className="pb-6 font-bold">PROCESS</h5>
          <h1 className="text-4xl font-bold pb-6">How we do it?</h1>
          <h4 className="pb-6">
            Our app works for businesses of all sizes and shapes. <br />
            <b>Starting at just $5 for an agent.</b>
          </h4>
          <button className=" bg-transparent rounded p-1 border-black  border-2">
            Contact Us
          </button>
        </div>
        <div className="grid grid-flow-row gap-8 grid-cols-2 ">
          <div className="pb-8">
            <h1 className="font-bold flex items-center text-2xl pb-6 ">
              <BsArrowUpRightSquare className='mr-3'/> 
              Client centric requisites
            </h1>
            <p className="pb-4">
              We benchmark the requirements by analyzing customers’ needs and
              put forth practically functional outcomes to make the product
              scalable.
            </p>
            <div className="pb-6">
            <button className="bg-black text-white p-1 rounded ">Read More</button>
            </div>
            <h5 className="font-bold flex items-center pb-4">
              <BsArrowUpRightSquare className='mr-3'/>
              Design
            </h5>
            <h5 className="font-bold flex items-center">
              <BsArrowUpRightSquare className='mr-3'/>
              What discounts are available?
            </h5>
          </div>

          <div className="pb-8">
            <h1 className="font-bold flex items-center text-2xl pb-6">
              <BsArrowUpRightSquare className='mr-3'/>
              Screen Mockups are our mid-fidelity
            </h1>
            <p className="pb-4">
              To envisage the requirements we formulate an exemplar design to
              foresee the static upshot of the final product.
            </p>
            <div className="pb-6">
            <button className="bg-black text-white p-1 rounded ">Read More</button>
            </div>
            <h5 className="font-bold flex items-center pb-4">
              <BsArrowUpRightSquare className='mr-3'/>
              Development
            </h5>
            <h5 className="font-bold flex items-center ">
              <BsArrowUpRightSquare className='mr-3'/>
              How can I cancel my subscription?
            </h5>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProcessComponent;
