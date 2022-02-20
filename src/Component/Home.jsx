import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "lightcyan",
          padding: "6px",
          boxShadow: "10px 10px 5px ",
          fontStyle: "normal",
          textDecoration: "none"
        }}
      >
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <div placeholder="Enter Name ...">search</div>
          </Link>
        </div>
        <div>
          {" "}
          <button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log In
            </Link>
          </button>
          <button>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </button>
        </div>
        {/* <div> </div> */}
      </div>
    </>
  );
}
export default Home;
