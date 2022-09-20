import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./component/aboutUs/AboutUs";
import Fitness from "./component/fitness/Fitness";
import Gyms from "./component/gyms/Gyms";
import Partner from "./component/wtfPartner/Partner";
import Nutrition from "./component/nutrition/Nutrition";
import LogIn from "./component/logIn/LogIn";
import WtfHome from "./component/home/Wtfhome";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<WtfHome />} />
        <Route path="fitness" element={<Fitness />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/gyms" element={<Gyms />} />

        <Route path="/partner" element={<Partner />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
