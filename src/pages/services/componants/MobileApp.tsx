import brandImage from "../../../assets/images/Service-page-image/brandImage.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import Mobileappaccordian from "../data/Mobileappaccordian"
const Mobileapp  = (props: any) => {
    return (
        <>
         <section className="grid grid-cols-4">
        <div className=" col-span-2">
          <img src={brandImage} alt="" className="object-contain h-full,w-full " />
        </div>
        <div className="col-span-2 text-left pl-20 pr-20 pt-10">
          <p className="font-sans text-xs font-normal">OUR SERVICES</p>
          <p className="font-sans text-4xl  font-semibold">{ props.serviceData.title }</p>
          <p className="font-sans text-base pt-3 font-normal">Reduction in operating costs for the whole product team which <b>creates amazing UI/UX experiences</b>,
            by crafting top-notch user experience of funny the century rather.</p>
            <Mobileappaccordian/>
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  p-1  mt-2">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
      </section>
        </>
        
    );
};

export default Mobileapp;