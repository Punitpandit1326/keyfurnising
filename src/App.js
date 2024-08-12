import "./App.css";
import Otp from "./Components/Otp/Otp";
import Login from "./Components/Login/Login";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import {  Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Category from "./Pages/Category/Category";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Payment from "./Pages/Payment/Payment";
import { useEffect, useState } from "react";
import { App as CapacitorApp } from '@capacitor/app';
import { isPlatform } from '@ionic/react';
import Intro from "./Pages/Intro/Intro";
import Profile from "./Pages/Profile/Profile";
import Editprofile from "./Pages/EditProfile/Editprofile";

function App() {
  const [splash, setSplash] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const id = setTimeout(() => {
      setSplash(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (isPlatform('android')) {
      const backButtonListener = CapacitorApp.addListener('backButton', () => {
        if (location.pathname === '/' || location.pathname === '/intro') {
          CapacitorApp.exitApp();
        } else {
          navigate(-1);
        }
      });

      return () => {
        backButtonListener.remove();
      };
    }
  }, [location, navigate]);

  return splash ? (
    <SplashScreen />
  ) : (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/categorydetails" element={<CategoryDetails />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<Editprofile />} />
    </Routes>
  );
}

export default App;
