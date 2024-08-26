import "./App.css";
import Otp from "./Components/Otp/Otp";
import Login from "./Components/Login/Login";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Category from "./Pages/Category/Category";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Payment from "./Pages/Payment/Payment";
import { useEffect, useState } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import { isPlatform } from "@ionic/react";
import Intro from "./Pages/Intro/Intro";
import Profile from "./Pages/Profile/Profile";
import Editprofile from "./Pages/EditProfile/Editprofile";
import MyOrders from "./Pages/MyOrder/MyOrders";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Home from "./Pages/Home/Home";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Address from "./Pages/MyAddress/Address";
import AddAddress from "./Pages/AddAddress/AddAddress";
import Coupon from "./Pages/Coupons/Coupon";
import Review from "./Pages/Review/Review";
import Help from "./Pages/Help/Help";
import Help2 from "./Pages/Help2/Help2";
import ChatSupport from "./Pages/ChatSupport/ChatSupport";
import ProductReturn from "./Pages/ProductReturn/ProductReturn";
import ProductReturn2 from "./Pages/ProductReturn2/ProductReturn2";
import Notification from "./Pages/Notification/Notification";
import TroublePage from "./Pages/TroublePage/TroublePage";
import Search from "./Pages/Search/Search";

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
    if (isPlatform("android")) {
      const backButtonListener = CapacitorApp.addListener("backButton", () => {
        if (location.pathname === "/" || location.pathname === "/intro") {
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
      <Route path="/any-trouble-page" element={<TroublePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/categorydetails" element={<CategoryDetails />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<Editprofile />} />
      <Route path="/myorder" element={<MyOrders />} />
      <Route path="/orderhistory" element={<OrderHistory />} />
      <Route path="/orderdetails" element={<OrderDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/myaddress" element={<Address />} />
      <Route path="/addaddress" element={<AddAddress />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/review" element={<Review />} />
      <Route path="/help" element={<Help />} />
      <Route path="/help2" element={<Help2 />} />
      <Route path="/chatsupport" element={<ChatSupport />} />
      <Route path="/product-return" element={<ProductReturn />} />
      <Route path="/productreturn" element={<ProductReturn2 />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
