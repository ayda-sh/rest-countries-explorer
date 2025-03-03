import { Route, Routes } from "react-router-dom";  
import { Home } from "./components/home/home";  
import { Countries } from "./components/countries/countries";  
import { About } from "./components/about/about";  
import Layout from "./components/navbar/layout";  

function App() {  
  return (  
    <Routes>  
      <Route element={<Layout />}>  
        <Route path="/" element={<Home />} />  
        <Route path="/countries" element={<Countries />} />  
        <Route path="/about" element={<About />} />  
      </Route>  
    </Routes>  
  );  
}  

export default App;  