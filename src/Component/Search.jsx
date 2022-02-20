import React, { useState } from "react";
import Home from "./Home";
import Image from "./Image";

function Search() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  function changeHandeler(e) {
    setInputValue(e.target.value);
  }
  function fetchfired(e) {
    e.preventDefault();
    if (!inputValue) return;
    async function fetchdata() {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const data = await resp.json();
      const finaldata = data;
      setValue(finaldata);
      // console.log(value);
    }
    fetchdata();
  }

  return (
    <>
      <Home />
      <div style={{ marginTop: "5%", textAlign: "center" }}>
        {/* <h1>search result</h1> */}
        <input
          type="text"
          placeholder="Enter name..."
          onChange={changeHandeler}
          value={inputValue}
          style={{ textAlign: "center", justifyItems: "center" }}
        />
        <button onClick={fetchfired}>Search</button>
        <div className="search-result">
          {value && value.map((ele) => <Image key={ele.id} ele={ele} />)}
        </div>
      </div>
    </>
  );
}
export default Search;
