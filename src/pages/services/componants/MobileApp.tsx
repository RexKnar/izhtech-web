import brandImage from "../../../assets/images/Service-page-image/brandImage.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import Mobileappaccordian from "../data/Mobileappaccordian"
const Mobileapp = (props: any) => {
  return (
    <>
      <section className="grid grid-cols-4">
        <div className=" col-span-2">
          <img src={brandImage} alt="" className=" h-full p-0 w-auto" />
        </div>
        <div className="col-span-2 text-left  pl-24 pr-36  py-20">
          <p className="font-sans text-xs font-normal">OUR SERVICES</p>
          <h2 style={{
            color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
            fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
          }} > {props.serviceData.title}</h2>
          <p className="font-sans text-sm justify-self-center pt-3 font-normal">{props.serviceData.description}</p>
          <Mobileappaccordian />
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  px-3 py-1.5">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
      </section>
    </>

  );
};

export default Mobileapp;