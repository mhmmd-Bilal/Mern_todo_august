import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <>
      Home Screen
      <Link to={"/login"}>Login</Link>
    </>
  );
}

export default HomeScreen;