import './App.css'
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Footer from './Components/Footer';

function App() {


  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      {/* scroll-to-top button component */}
      <ScrollToTopButton />
      {/* footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
