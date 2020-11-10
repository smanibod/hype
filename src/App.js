import React from "react";

//Components
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
      <Footer />
    </>
  );
}
