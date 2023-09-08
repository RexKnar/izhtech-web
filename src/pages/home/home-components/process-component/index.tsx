
import { BsArrowUpRightSquare  } from "react-icons/bs";
import { Accordion } from 'flowbite-react';


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
          <button className=" bg-transparent rounded p-2 border-black  border-2">
            Contact Us
          </button>
        </div>

        <div className="grid grid-flow-row gap-8 grid-cols-2 pt-24">
          <div className="pb-8">
          <Accordion collapseAll >
      <Accordion.Panel >
        <Accordion.Title >
        <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
        Client centric requisites      
            </h1>
        </Accordion.Title>
        <Accordion.Content>
        <p className="pb-4">
              We benchmark the requirements by analyzing customers’ needs and
              put forth practically functional outcomes to make the product
              scalable.
            </p>
            <div className="pb-6">
            <button className="bg-black text-white p-2  rounded ">Read More</button>
            </div>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>
           <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
            Design
            </h1>
        </Accordion.Title>
        <Accordion.Content>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
            What discounts are available?
            </h1>
        </Accordion.Title>
        <Accordion.Content>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
          </div>

          <div className="pb-8">
          <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
        <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
            Screen Mockups are our mid-fidelity      
            </h1>
        </Accordion.Title>
        <Accordion.Content>
        <p className="pb-4">
        To envisage the requirements we formulate an exemplar design to
              foresee the static upshot of the final product.
            </p>
            <div className="pb-6">
            <button className="bg-black text-white p-2  rounded ">Read More</button>
            </div>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>
           <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
            Design
            </h1>
        </Accordion.Title>
        <Accordion.Content>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <h1 className="font-bold flex items-center text-2xl pb-6 ">
            <BsArrowUpRightSquare className='mr-3'/> 
            Development
            </h1>
        </Accordion.Title>
        <Accordion.Content>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>  
          </div>
        </div>

      </section>
    </main>
  );
}

export default ProcessComponent;