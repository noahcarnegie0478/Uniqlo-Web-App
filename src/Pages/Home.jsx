import React, { useContext, useEffect } from "react";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import HomePageContent from "../Component/homePage/HomePageContent";

import Category from "../Component/Category";
import { itemsContext } from "../Context/ItemProvider";
function Home() {
  const { banners, category, fetchBanner } = useContext(itemsContext);

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div className="min-h-screen ">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : (
        <div>
          {banners?.length != 0 ? <HomePageContent /> : <div>Loading ...</div>}
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Home;
