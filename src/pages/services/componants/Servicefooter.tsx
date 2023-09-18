import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
const servicefooter = (props: any) => {
    return (
        <>
             <section className="p-20 bg-black text-white pr-[151px]"> 
                <div className="flex container g">
                    <div className="flex-1">
                        <p className="text-sm text-gray-600">LET’S COLLABORATE</p>
                        <h2 className="mt-2" style={{ fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweigh, letterSpacing: props.serviceData.styles.letterspacing, lineHeight: props.serviceData.styles.lineheight, fontStyle: props.serviceData.styles.fontstyle, fontFamily: props.serviceData.styles.fontfamily }}>Send us an email,<br />
                            to discuss a new project.</h2>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-end pt-10 mt-3">
                            <button className="flex  bg-gradient-to-tl from-blue-500 via-pink-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded-md transition">Contact Us<img className="mt-0.5 ml-2" src={arrowImage} /></button>
                        </div>
                    </div>
                </div>
                <section>
                    <div className=" mt-5 border-t opacity-20 border-graypx-3 py-1.5"></div>
                </section>
                <section className="flex ">
                    <div className="flex-1 mt-5 text-sm font-light text-slate-300 pr-[180px]">
                    We're a <b>team of creatives</b> who are excited about unique ideas and help digital and fin-tech companies <b>to create amazing identity.</b>
                    </div>
                    <div className="flex-1"></div>
                </section>
            </section>

        </>
    );
};
export default servicefooter; 