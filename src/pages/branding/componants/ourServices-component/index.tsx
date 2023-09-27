import BranddetailImage1 from "../../../../assets/images/Branding-image/p5x4IKEkWSo.png"
export function OurServices() {
    return (
        <>
            <section className="md:py-24 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
                    <div className="col-span-1">
                        <img className="h-[460px] md:pl-12 w-[520px] " src={BranddetailImage1} alt="" />
                    </div>
                    <div className="col-span-1 text-left md:my-20 mb-8 mt-5 p-4">
                        <p className="font-sans text-xs font-normal">OUR SERVICES</p>
                        <h1 className="font-semibold text-4xl md:text-5xl mt-5">
                            Tailor-Made Solutions for Every Business
                        </h1>
                        <section>
                            <div className="mt-5 border-t border-graypx-1 pt-px opacity-60" style={{ backgroundColor: '#60606B' }}></div>
                        </section>
                        <p className="font-normal  text-sm text-opacity-75  leading-6 tracking-wide mt-8">Whether you’re a burgeoning startup endeavouring to carve out your brand’s presence or a well-established
                            enterprise seeking to invigorate your image, we’re here to provide tailor-made
                            branding solutions tailored to your company’s specific requisites. Our commitment is to work closely with you,
                            ensuring that your brand mirrors your values, aspirations, and vision.</p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default OurServices; 