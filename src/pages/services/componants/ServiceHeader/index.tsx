import  vectorImage1 from "../../../../assets/images/Service-page-image/Vector (2).png";
export function ServicesHeader() {
    return (
      
            <section className="justify-start pr-8 pt-[98px] pb-16 gap-2.5 ml-14 ">
                <div className="relative">
                <img className="absolute right-0 -top-[145px]  z-20" src= {vectorImage1} alt="" />
                </div>
                <h1 className="font-sans text-4xl pt-8 font-bold">Our Services</h1>
                <h4 className="font-sans text-xs pt-4 font-normal ">Leave us a little info, and we’ll be in touch.</h4>
                <button className="rounded-md text-white text-small font-semibold bg-black  p-1 mt-4">Contact Us</button>
            </section>

    )
}
