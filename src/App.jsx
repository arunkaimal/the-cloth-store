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
import AdminHome from "./admin/AdminHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route element={<Header />}>
          {/* <Route> */}
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminHome />} />
        </Routes>

        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
