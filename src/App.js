import { Appbar } from "./components/Appbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Vegetables } from "./components/Vegetables";
import { Fruits } from "./components/Fruits";
import {Juice} from "./components/Juice"

function App() {
  return (
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/" element={<Fruits/>}/>
      <Route path="/vegetables" element={<Vegetables/>}/>
      <Route path="/more" element={<Juice />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
