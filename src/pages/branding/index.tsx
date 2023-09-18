import { Brandingheader } from "../services/componants/Brandingheader";
import Servicefooter from "../services/componants/Servicefooter";
import { serviceData4 } from "../services/data/service-data";
export function BrandingPage() {
    return (
      <>
      <Brandingheader/>
      <Servicefooter  serviceData={serviceData4}/>
      </>
    );
  }
 