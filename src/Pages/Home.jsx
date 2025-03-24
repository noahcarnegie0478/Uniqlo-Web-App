import React, { useEffect, useState } from "react";
import UpperNavBar from "../Component/UpperNavBar";
import LowerNavbar from "../Component/LowerNavbar";
import HomePageContent from "../Component/HomePageContent";
import axios from "axios";
import Category from "../Component/Category";

function Home() {
  const [banners, setBanner] = useState([]);
  const [topic, setTopic] = useState("Men");
  const [category, setCategory] = useState(false);

  const fetchBanner = async () => {
    const result = await axios.get("http://localhost:3000/api/banner/");
    setBanner(result.data);
  };
  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div className="text-white  relative min-h-screen bg-gray-500">
      <UpperNavBar setTopic={setTopic} />
      {category ? (
        <Category topic={topic} />
      ) : (
        <div>
          {banners.length != 0 ? (
            <HomePageContent banners={banners} topic={topic} />
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      )}

      <LowerNavbar category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
