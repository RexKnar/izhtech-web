import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
const servicefooter = (props: any) => {
    return (
        <>
             <section className="p-20 bg-black text-white"> 
                <div className="flex container g">
                    <div className="flex-1">
                        <p className="text-sm text-gray-600">LET’S COLLABORATE</p>
                        <h2 className="mt-2" style={{ fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweigh, letterSpacing: props.serviceData.styles.letterspacing, lineHeight: props.serviceData.styles.lineheight, fontStyle: props.serviceData.styles.fontstyle, fontFamily: props.serviceData.styles.fontfamily }}>Send us an email,<br />
                            to discuss a new project.</h2>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-end pt-10">
                            <button className="flex  bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-300 rounded-md text-white text-small font-semibold 
     bg-black  p-1  mt-2">Contact Us<img className="mt-0.5 ml-2" src={arrowImage} /></button>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="border-t border-gray-300"></div>
                </section>
                <section className="flex ">
                    <div className="flex-1 mt-5 text-xs">
                    We're a <b>team of creatives</b>who are excited about unique ideas and help digital and fin-tech companies <b>to create amazing identity.</b>
                    </div>
                    <div className="flex-1">

                    </div>
                </section>
            </section>

        </>
    );
};
export default servicefooter; 