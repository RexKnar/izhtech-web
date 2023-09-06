//
// 
// export function Brandings(props: {title:any,description:any}){
// <section className="grid grid-cols-4 ">
// <div className=" col-span-2">
//   <img src={brandImage} alt="" className="object-contain h-full,w-full " />
// </div>
// 
// </section>
// }
import brandImage from "../../../assets/images/Service-page-image/brandImage.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import Brandingaccordian from "../data/Brandingaccordian"
import circlefour from "../../../assets/images/Service-page-image/CirclesFour.png"
import flagImage from "../../../assets/images/Service-page-image/FlagBanner.png"
// Define the Branding component
const Branding = (props: any) => {
    return (
        <>
            <section className="grid grid-cols-4 ">

                <div className=" col-span-2 relative">
                    <img src={brandImage} alt="" className="absolute h-full p-0 w-full " />
                    <div className="absolute bg-blue-900 bg-opacity-96 grid text-white content-end pl-10 pt-10 pb-10 pr-24  bottom-0 right-64">
                        <div className="flex flex-row gap-2 text-end">
                            <div className="">
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
                    <div className="absolute bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-300 grid text-white content-end pl-10 pt-10 pb-10 pr-24 bottom-0 right-0">
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


                {/* <div className=" col-span-2  relative ">
                    <img src={brandImage} alt="" className=" object-contain h-full,w-full " />
                    <div className="absolute">
                      
                </div> */}
                <div className="col-span-2 text-left px-10 py-[50px]">
                    <p className="font-sans text-xs font-normal">OUR SERVICES</p>
                    <h2 style={{
                        color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
                        fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
                    }} > {props.serviceData.title}</h2>
                    {/* <p className="font-sans text-4xl  font-semibold">{props.title}</p> */}
                    <p className="font-sans text-base pt-3 font-normal">Reduction in operating costs for the whole product team which <b>creates amazing UI/UX experiences</b>,
                        by crafting top-notch user experience of funny the century rather.</p>
                    <Brandingaccordian />
                    <button style={{ backgroundColor: props.serviceData.styles.buttoncolor }} className="flex rounded-md text-white text-small font-semibold 
     bg-black  p-1  mt-2 ">Learn More<img style={{ backgroundColor: props.serviceData.styles.buttoncolor }} className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
                </div>
            </section >
        </>

    );
};

export default Branding;
