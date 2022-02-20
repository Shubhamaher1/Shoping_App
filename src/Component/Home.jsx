import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1> Shoping App</h1>
      <div>
        <div>
          <Link to="/">Home</Link>{" "}
        </div>
      </div>
    </>
  );
}
export default Home;
