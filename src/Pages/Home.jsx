import React, { useEffect, useState } from "react";
import UpperNavBar from "../Component/UpperNavBar";
import LowerNavbar from "../Component/LowerNavbar";
import HomePageContent from "../Component/HomePageContent";
import axios from "axios";

function Home() {
  const [banners, setBanner] = useState([]);

  const fetchBanner = async () => {
    const result = await axios.get("http://localhost:3000/api/banner/");
    setBanner(result.data);
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div className="text-white  relative min-h-screen bg-gray-500">
      <UpperNavBar />
      {banners.length != 0 ? (
        <HomePageContent banners={banners} />
      ) : (
        <div>Loading ...</div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Home;
