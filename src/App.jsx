import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Countries } from "./components/countries/countries";
import { About } from "./components/about/about";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/countries" element={<Countries />}/>
      <Route path="/about" element={<About />}/>

    </Routes>
  </div>;
}

export default App;
