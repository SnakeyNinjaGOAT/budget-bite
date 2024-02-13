import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, SignIn, SignUp } from "./pages";
import { Header, Footer } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
