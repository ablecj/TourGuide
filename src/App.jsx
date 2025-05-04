import './App.css'
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Footer from './Components/Footer';
import WhatsAppIcon from './Components/WhatsAppIcon ';
import CardDetail from './Components/CardDetail';
import TourPackage from './Pages/TourPackage';

function App() {


  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/TourPackage' element={<TourPackage />} />
        <Route path="/tour/:id" element={<CardDetail />} />

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
