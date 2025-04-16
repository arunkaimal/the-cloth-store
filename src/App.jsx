import React from "react";
import "./App.css";

// import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

// import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <AuthProvider> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {/* </AuthProvider> */}
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
