function Testimonials() {
  return (

<>
   
      <section>

        <div className="bg-black flex flex-col lg:flex-row lg:space-x-4 text-white p-5  relative">
          <div className="lg:w-1/2 text-left mb-6">

            <h1 className="mt-10 pb-4 mb-3">TESTIMONIALS</h1>

            <hr />

            <div className="text-3xl mt-3 mb-3"><h1 className="mb-3"><b>What our clients say</b></h1>
              <h1><b>about our studio.</b></h1></div>

             <button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
              More Reviews &rarr;
            </button> 
          </div>

          <div className="lg:w-1/2  text-left">
            <div className="mb-6">
  
           <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">customer support</span>
            </div>
            <p className="mb-3">
              “5 stars WordPress template! If anyone wants an example of what you can do <br/>with this theme. I tell you what, there has never been an issue that Cory from the <br/>colabrio support team hasn't been able to solve for me.”
            </p>


            <p><b>Colin Lucido</b></p>
            <p className="mb-6">UI Designer · Interactive Media</p>

            <p className="pb-10">03---05</p>
          </div>
        </div>

      </section>
</>

  );
}
export default Testimonials