import BranddetailImage from "../../../../assets/images/Branding-image/Image.png"
import {TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti'
import {BiLogoPinterestAlt} from 'react-icons/bi'
export function Brandingheader() {
    return (
        <>
            <section className="pr-32 pl-24 py-10">
                <div className="ml-16">
                    <h6 className="font-semibold text-sm ">Our Service</h6>
                    <h2 className="mt-2 font-bold text-5xl font-xs">Branding.</h2>
                </div>
            </section>
            <section className="pl-24 pr-32 ">
                <div className="flex gap-10">
                    <div className=" bottom-0 left-0">
                        <img className="relative object-cover h-96 max-w-xl ml-16" src={BranddetailImage} alt="" />
                        <div className="absolute rounded-md top-[241px] left-[191px] flex flex-col bg-white ">
                            <TiSocialFacebook  className="w-9 p-[6px] h-9"/>
                            <TiSocialTwitter className="w-9 p-[6px] h-9" />
                            <BiLogoPinterestAlt className="w-9 p-[6px] h-9"/>
                        </div>
                    </div>
                    <div className="pr-8">
                        <h1 className="font-semibold text-sm">IZHTECH</h1>
                        <h1 className="font-semibold text-5xl mt-3"> Your Partner for  Crafting Unforgettable  Brand Identities</h1>
                        <p className="font-normal mt-5 text-sm">At Izh-Tech, we firmly believe that a robust brand forms the very heart of a successful business. Our conviction in this truth is what fuels our passion to provide a comprehensive array of branding and design services aimed at not just helping yo
                            u establish your brand, but nurturing its growth over time.</p>
                        <p className="font-semibold mt-5 text-sm">Our Comprehensive Suite of Branding and Design Services</p>
                        <p className="font-normal  text-sm">Our commitment to your brand’s success is reflected in our wide-ranging suite of services.
                            Here’s a closer look at what we offer:</p>
                    </div>
                </div>
            </section>
                   
        </>

);
};
export default Brandingheader; 