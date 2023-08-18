import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./temp-hook/Home";
import Html from "./temp-hook/Html";
import Css from "./temp-hook/Css";
import Javascript from "./temp-hook/Javascript";
import Java from "./temp-hook/Java";
import Footer from "./temp-hook/Footer";
import Aside from "./temp-hook/Aside";

function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/html" element={<Html />}></Route>
      <Route path="/css" element={<Css />}></Route>
      <Route path="/javascript" element={<Javascript />}></Route>
      <Route path="/java" element={<Java />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    <Aside/>
    <Footer/>
    
    </>
   
  );
}

export default App;
