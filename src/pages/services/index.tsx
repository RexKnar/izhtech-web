import { ServicesHeader } from "./componants/ServiceHeader/index"
import Branding from "./componants/Branding/index"
import { serviceData,serviceData1,serviceData2,serviceData3,serviceData4 } from "./data/service-data"
import Webapp from './componants/WebApp/index'
import Mobileapp from "./componants/MobileApp/index"
import DigitalMarketing from "./componants/DigitalMarketing/index"
import Servicefooter from "./componants/ServiceFooter/index"
export function ServicesPage() {
  return (
    <>
      <main className="mt-0 transition-all duration-200 ease-in-out">
        <ServicesHeader />
        <Branding serviceData={serviceData} />
        <Webapp serviceData={serviceData1} />
        <Mobileapp serviceData={serviceData2} />
        <DigitalMarketing serviceData={serviceData3} />
        <Servicefooter  serviceData={serviceData4}/>
      </main>
    </>
  );
}