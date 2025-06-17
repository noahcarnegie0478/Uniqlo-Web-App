import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { itemsContext } from "../../Context/ItemProvider";
function Breadcrumbs() {
  const location = useLocation();
  const { currentBreadcrumbs, setCurrentBreadcrumbs, category } =
    useContext(itemsContext);
  const Address = [
    { name: "Cart", path: "/cart" },
    { name: "Success", path: "/success" },
    { name: "Cancle Checkout", path: "/cancle" },
    { name: "Profile", path: "/profile" },
    { name: "Category", path: "/listing" },
  ];

  const checkIncludes = () => {
    for (let i = 0; i < Address.length; i++) {
      if (Address[i].path === location.pathname) {
        checkUnique(Address[i]);
        break;
      }
    }
  };
  const checkUnique = Address => {
    let valid = false;
    for (let j = 0; j < currentBreadcrumbs.length; j++) {
      if (currentBreadcrumbs[j].path == Address.path) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      setCurrentBreadcrumbs(prev => [
        ...prev,
        { name: Address.name, path: Address.path },
      ]);
    }
  };
  useEffect(() => {
    checkIncludes();
    if (
      location.pathname !==
        currentBreadcrumbs[currentBreadcrumbs.length - 1]?.path &&
      currentBreadcrumbs.length - 1 !== 0
    ) {
      setCurrentBreadcrumbs(prev => prev.slice(0, -1));
    }
  }, [location.pathname]);
  return (
    <div className="h-10 w-full relative top-20  bg-white flex items-center gap-2 px-40 ">
      {currentBreadcrumbs.length != 0 ? (
        currentBreadcrumbs.map((breadcrumbs, index) => (
          <div className=" flex items-center gap-2" key={"breadcrumb" + index}>
            <p> | </p>
            <Link to={breadcrumbs.path}>
              <p
                className={`text-grey-500 ${
                  location.pathname == breadcrumbs.path
                    ? "font-bold"
                    : " hover:text-red-500 hover:font-semibold"
                }`}
              >
                {breadcrumbs.name}
              </p>
            </Link>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Breadcrumbs;
