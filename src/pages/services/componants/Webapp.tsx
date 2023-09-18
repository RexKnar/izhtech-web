import brandImage2 from "../../../assets/images/Service-page-image/brandImage2.jpg"
import arrowImage from "../../../assets/images/Service-page-image/arrow.png"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const Webapp = (props: any) => {
  return (
    <>
      <section className="grid grid-cols-4">
        <div className="col-span-2 text-left pl-32 pr-36 my-20">
          <p className="font-sans text-xs font-normal  pt-3 ">OUR SERVICES</p>
          <h2 style={{
            color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
            fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
          }} className="font-sans text-4xl pt-3 font-semibold">{props.serviceData.title}</h2>
          <p className="font-sans text-sm justify-self-center pt-3 font-normal">{props.serviceData.description}</p>
          <div className="flex gap-4 flex-row mt-10">
            <div className="" style={{ width: 75, height: 'auto', }}>
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
            <div className="basis-1/2 font-xs font-semibold mt-2">
              <p>Increased by <br></br>
                the last 2 years.</p>
            </div>
          </div>
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  px-3 py-1.5  mt-10">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
        <div className=" col-span-2">
          <img src={brandImage2} alt="" className="h-full p-0 w-auto" />
        </div>
      </section>
    </>
  );
};
export default Webapp;