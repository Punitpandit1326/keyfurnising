import "./App.css";
import Otp from "./Components/Otp/Otp";
import Login from "./Components/Login/Login";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Pages/Category/Category";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/categorydetails" element={<CategoryDetails />} />
        <Route path= "/checkout" element={<CheckOut/> } />
        <Route path= "/payment" element={<Payment/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
