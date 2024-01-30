import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PortfolioHome from "./pages/PortfolioHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioDetails from "./pages/PortfolioDetails";
import StockDetails from "./pages/StockDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioHome />}></Route>
          <Route
            path="/portfolio-details"
            element={<PortfolioDetails />}
          ></Route>
          <Route path="/stock-details" element={<StockDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
