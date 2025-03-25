import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./Pages/ListingPage";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listing" element={<ListingPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
