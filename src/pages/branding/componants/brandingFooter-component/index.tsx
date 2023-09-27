import arrowImage from "../../../../assets/images/Branding-image/arrow.png"
const Brandingfooter = (props: any) => {
    return (
        <>
             <section className="p-[10px] md:p-20 bg-black text-white md:pr-[151px] md:pl-[137px]"> 
                <div className="md:flex container ">
                    <div className="md:flex-1">
                        <p className="text-sm text-gray-600">LET’S COLLABORATE</p>
                        <h2 className="mt-2 font-semibold text-4xl" style={{fontWeight: props.serviceData.styles.fontweigh,lineHeight: props.serviceData.styles.lineheight, fontStyle: props.serviceData.styles.fontstyle, fontFamily: props.serviceData.styles.fontfamily }}>Send us an email,<br />
                            to discuss a new project.</h2>
                    </div>
                    <div className="md:flex-1">
                        <div className="md:flex md:justify-end md:pt-10 mt-3 py-5">
                            <button className="flex bg-gradient-to-tl from-blue-500 via-pink-500 to-yellow-400 text-white font-semibold py-[5px] md:py-2 px-[10px] md:px-4 rounded-md transition">Contact Us<img className="mt-0.5 ml-2" src={arrowImage} /></button>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="md:mt-5 border-t opacity-20 border-graypx-3 py-1.5"></div>
                </section>
                <section className="md:flex ">
                    <div className="md:flex-1 md:mt-5 text-sm font-light text-slate-300 md:pr-[180px]">
                    We're a <b>team of creatives</b> who are excited about unique ideas and help digital and fin-tech companies <b>to create amazing identity.</b>
                    </div>
                    <div className="hidden sm:block md:flex-1"></div>
                </section>
            </section>

        </>
    );
};
export default Brandingfooter; 