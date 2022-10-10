import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/AddProduct" element={<AddProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
