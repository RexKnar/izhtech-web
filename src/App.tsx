import "./App.css";
import { AboutUsPage } from "./pages/aboutus";
import { ContactUsPage } from "./pages/contactus";
import { HomePage } from "./pages/home";
import { ServicesPage } from "./pages/services";
import { BrandingPage } from "./pages/branding";

import { FooterNavigationMenu } from "./shared/components/FooterNavigationMenu";
import { HeaderNavigationMenu } from "./shared/components/HeaderNavigationMenu";
import {
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index loader={() => redirect("home")} />
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="service" element={<ServicesPage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="branding" element={<BrandingPage/>}/>
    </>
  )
);
function App() {

  return (
    <>
      <HeaderNavigationMenu />
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="branding" element={<BrandingPage/>}/>
      </Routes>
      <FooterNavigationMenu />
    </>
  );
}

export default App;
