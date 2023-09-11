function Testimonials() {
  return (

    <>

      <section className=" bg-black relative">

        <div className=" pt-20 pb-10 lg:ml-20 pl-20 bg-black flex flex-col lg:flex-row lg:space-x-4 text-white  relative">
          <div className="lg:w-1/2 text-left mb-6">

            <h1 className=" text-xs text-gray-500 pb-4 mb-3">TESTIMONIALS</h1>

            <hr className="border border-gray-900 w-85"/>

            <div className="text-2xl mt-3 mb-3"><h1><b>What our clients say<br/>about our studio.</b></h1></div>

            <button className=" mt-6 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
              More Reviews &rarr;
            </button>
          </div>

          <div className="lg:w-1/2  mr-[50px] text-left">
            <div className="mb-6">

              <span className="bg-gray-950 text-gray-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-100 dark:text-gray-800">customer support</span>

            </div>
            <p className="mb-3 text-gray-500 text-xs">
              “5 stars WordPress template! If anyone wants an example of what you can do <br />with this theme. I tell you what, there has never been an issue that Cory from the <br />colabrio support team hasn't been able to solve for me.”
            </p>


            <p><b>Colin Lucido</b></p>
            <p className="text-gray-500 mb-6 text-xs">UI Designer · Interactive Media</p>

            <p className="pb-10">03---05</p>
          </div>
        </div>

      </section>
    </>

  );
}
export default Testimonials