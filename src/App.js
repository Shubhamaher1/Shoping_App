import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Search from "./Component/Search";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
export default function App() {
  return (
    // // <div id="App" className="App">
    // //   hlsdf
    // // </div>
    // <h1>this </h1>
    <BrowserRouter>
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "monospace",
          fontWeight: "bolder"
        }}
      >
        Shoping App
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/signup" element={<Signup />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
