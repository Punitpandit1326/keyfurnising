import "./App.css";
import Otp from "./Components/Otp/Otp";
import Login from "./Components/Login/Login";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Pages/Category/Category";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Payment from "./Pages/Payment/Payment";
import { useEffect, useState } from "react";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setSplash(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return splash ? (
    <SplashScreen />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/categorydetails" element={<CategoryDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
