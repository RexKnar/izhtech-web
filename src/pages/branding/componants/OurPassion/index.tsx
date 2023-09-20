import BranddetailImage1 from "../../../../assets/images/Branding-image/p5x4IKEkWSo.png"
import ArrowImage from "../../../../assets/images/Branding-image/arrow (1).png"
import ArrowImage2 from "../../../../assets/images/Branding-image/arrow (2).png"
export function OurPassion() {
    return (
        <>
            <section className="py-24 px-24 pl-[146px]">
                <div className="grid grid-cols-2 gap-20 ">
                    <div className="col-span-1 text-left my-20">
                        <p className="font-sans text-xs font-normal">OUR PASSION</p>
                        <h1 className="font-semibold text-5xl mt-5">
                            Guiding Businesses to Forge Impactful Brands
                        </h1>
                        <section>
                            <div className="mt-5 border-t border-graypx-1 pt-px opacity-60" style={{ backgroundColor: '#60606B' }}></div>
                        </section>
                        <p className="font-normal  text-sm text-opacity-75  leading-6 tracking-wide mt-8">Our fervour lies in guiding businesses to forge impactful, enduring brands. Connect with
                            us to delve into the realm of Izh-Tech’s branding and design services. Discover
                            how we can collaborate with you to construct a formidable brand identity that effortlessly distinguishes itself within your industry.</p>
                    </div>
                    <div className="col-span-1 relative">
                        <img className="h-[460px] pl-12 w-[520px] " src={BranddetailImage1} alt="" />
                        <div className="absolute p-3 bottom-[-70px] right-[-64px]  bg-white">
                            <div className="flex">
                                <h6 className="p-3 justify-items-center font-semibold">Next service</h6>
                                <img className="p-3 justify-items-center" src={ArrowImage} alt="" />
                                <img className="p-3 justify-items-center" src={ArrowImage2} alt="" />
                            </div>
                            <h6 className="p-3 font-semibold">Web app</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default OurPassion; 