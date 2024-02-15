import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, LandingPage, SignIn, SignUp, Profile } from "./pages";
import { Header, Footer, PrivateRoute } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute destination={<LandingPage />} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute destination={<SignIn />} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
