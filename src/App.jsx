import './App.css'
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Footer from './Components/Footer';
import WhatsAppIcon from './Components/WhatsAppIcon ';
import CardDetail from './Components/CardDetail';
import TourPackage from './Pages/TourPackage';
import DestinationDetails from './Components/DestinationDetails';
import ContactForm from './Pages/Contact';
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  // sideEffects for AOS
    useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/TourPackage' element={<TourPackage />} />
        <Route path="/tour/:id" element={<CardDetail />} />

        {/* destination */}
        <Route path="/destination/:id" element={<DestinationDetails />} />

        {/* contact us */}
        <Route path='/contact' element={<ContactForm />} />

      </Routes>
      {/* whatsapp icon  */}
      <WhatsAppIcon />
      {/* scroll-to-top button component */}
      <ScrollToTopButton />
      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
