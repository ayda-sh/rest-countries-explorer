import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Countries } from "./components/countries/countries";
import { About } from "./components/about/about";
import Layout from "./components/navbar/layout";

function App() {
  return <div>
    <Layout>
    <Route path="/" element={<Home />}/>
      <Route path="/countries" element={<Countries />}/>
      <Route path="/about" element={<About />}/>
    </Layout>
     

   
  </div>;
}

export default App;
