import "./App.css";
import { AboutUsPage } from "./pages/aboutus";
import { ContactUsPage } from "./pages/contactus";
import { HomePage } from "./pages/home";
import { ServicesPage } from "./pages/services";
import { FooterNavigationMenu } from "./shared/components/FooterNavigationMenu";
import { HeaderNavigationMenu } from "./shared/components/HeaderNavigationMenu";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

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
      </Routes>
      <FooterNavigationMenu />
    </>
  );
}

export default App;
