// import brandImage from "../../assets/images/Service-page-image/brandImage.jpg"
// import brandImage2 from "../../assets/images/Service-page-image/brandImage2.jpg"
// import arrowImage from "../../assets/images/Service-page-image/arrow.png"
import { ServicesHeader } from "./componants/ServicesHeader"
import Branding from "./componants/Branding"
// import Demo from './componants/demo'
import { serviceData, serviceData4 } from "./data/service-data"
import { serviceData1 } from "./data/service-data"
import { serviceData2 } from "./data/service-data"
import { serviceData3 } from "./data/service-data"
import Webapp from './componants/Webapp'
// import { Accordion } from "flowbite-react"
// import Accordian1 from "./data/Accordian1"
import Mobileapp from "./componants/MobileApp"
import DigitalMarketing from "./componants/Digitalmarketing"
import Servicefooter from "./componants/Servicefooter"
export function ServicesPage() {
  return (
    <>
      <main className="mt-0 transition-all duration-200 ease-in-out">
        {/* Our Services Header*/}
        <ServicesHeader />
        {/* Branding Content */}
        <Branding serviceData={serviceData} />
        {/* Web App Content */}
        <Webapp serviceData={serviceData1} />
        {/* Mobile App Content */}
        <Mobileapp serviceData={serviceData2} />
        {/* Digital Marketing Content */}
        <DigitalMarketing serviceData={serviceData3} />
        {/* Service Bar Footer Content */}
        <Servicefooter  serviceData={serviceData4}/>
        {/* <Progressbar/> */}
        <></>
      </main>
    </>
  );
}