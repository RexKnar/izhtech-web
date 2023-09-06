import brandImage2 from "../../../assets/images/Service-page-image/brandImage2.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const Webapp = (props: any) => {
  return (
    <>
      <section className="grid grid-cols-4">
        <div className="col-span-2 text-left mt-10 pl-20 pr-20">
          <p className="font-sans text-xs font-normal">OUR SERVICES</p>
          <h2 style={{
            color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
            fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
          }} > {props.serviceData.title}</h2>
          <p className="font-sans text-base pt-3 font-normal">Our clients describe us as a product team which <b>creates amazing UI/UX experiences,</b>
            by crafting top-notch user experience of funny the century rather.</p>
          <div style={{ width: 150, height: 200, }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                root: {},
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                
                  transformOrigin: 'center center',
                },
              }}
              />


          </div>
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  p-1  mt-2">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
        <div className=" col-span-2">
          <img src={brandImage2} alt="" className="object-contain h-full,w-full " />
        </div>
      </section>
    </>
  );
};
export default Webapp;