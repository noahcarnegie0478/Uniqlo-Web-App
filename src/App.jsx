import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./Pages/ListingPage";
import Texting from "./Pages/Texting";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import Cancle from "./Pages/Cancle";
import DetailPage from "./Pages/DetailPage";
import TestPage from "./Pages/TestComponent/TestPage";
import Chatbot from "./Component/Chatbot/Chatbot";
import UpperNavBar from "./Component/homePage/UpperNavBar";
import LowerNavbar from "./Component/homePage/LowerNavbar";

function App() {
  console.log(localStorage);

  return (
    <div className="relative">
      <Router>
        <UpperNavBar />
        <div className=" min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listing" element={<ListingPage />}></Route>
            <Route path="/testing" element={<Texting />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/cancle" element={<Cancle />}></Route>
            <Route path="/item/:id" element={<DetailPage />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
          </Routes>
        </div>
        <LowerNavbar />
      </Router>
      <Chatbot />
    </div>
  );
}

export default App;
