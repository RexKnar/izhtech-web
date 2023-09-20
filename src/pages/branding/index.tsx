import { Brandingheader } from "../branding/componants/Brandingheader/index";
import { OurPassion } from "../branding/componants/OurPassion/index"
import { OurServices} from "../branding/componants/OurServices/index"
import  Brandingfooter  from "./componants/BrandingFooter/index"
import {serviceData4 } from "./data/branding-data"
import BrandingContent from "../branding/componants/BrandingContent/index";
export function BrandingPage() {
    return (
      <>
      <Brandingheader/>
      <BrandingContent/>
      <OurServices/>
      <OurPassion/>
      <Brandingfooter  serviceData={serviceData4}/>
      </>
    );
  }
 