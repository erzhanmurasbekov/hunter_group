import MyFooter from "./components/MyFooter";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Policy from "./components/Policy";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <>
      
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Main />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        </AnimatePresence>
        <MyFooter />
      
    </>
  );
}

export default App;
