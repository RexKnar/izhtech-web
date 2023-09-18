import brandImage from "../../../assets/images/Service-page-image/brandImage.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import Brandingaccordian from "../data/Brandingaccordian"
import circlefour from "../../../assets/images/Service-page-image/CirclesFour.png"
import flagImage from "../../../assets/images/Service-page-image/FlagBanner.png"
const Branding = (props: any) => {
    return (
        <>
            <section className="grid grid-cols-4">
                <div className=" col-span-2 relative">
                    <img src={brandImage} alt="" className="h-full p-0 w-auto " />
                    <div className="absolute bg-blue-950 bg-opacity-96 grid text-white content-end pl-10 pt-10 pb-10 pr-24  bottom-0 right-64">
                        <div className="flex flex-row gap-2 text-end">
                            <div>
                                <img src={circlefour} alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-4xl -mt-1 "> 35</p>
                            </div>
                            <div className="font-bold text-2xl -mt-1">
                                <p> +</p>
                            </div>
                        </div>
                        <p className="font-semibold mt-3">designers<br />
                            and developers</p>
                    </div>
                    <div className="absolute bg-gradient-to-tl from-blue-600 via-pink-500 to-yellow-300 grid text-white content-end pl-10 pt-10 pb-10 pr-24 bottom-0 right-0">
                        <div className="flex flex-row gap-2 text-end ">
                            <div className=" mt-1">
                                <img src={flagImage} alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-4xl -mt-1 "> 28</p>
                            </div>
                            <div className="font-bold text-2xl -mt-1">
                                <p> +</p>
                            </div>
                        </div>
                        <p className="font-semibold mt-3">awards for digital<br/>
innovation</p>
                    </div>
                </div>
                <div className="col-span-2 text-left  pl-24 pr-36  py-20">
          <p className="font-sans text-xs font-normal">OUR SERVICES</p>
          <h2 style={{
            color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
            fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
          }} > {props.serviceData.title}</h2>
          <p className="font-sans text-sm justify-self-center pt-3 font-normal">{props.serviceData.description}</p>
          <Brandingaccordian />
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  px-3 py-1.5">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
            </section >
        </>

    );
};

export default Branding;
