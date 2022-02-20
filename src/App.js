import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

export default function App() {
  return (
    <h1>this is App</h1>
    // <BrowserRouter>
    //   <h1>This is App File</h1>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
