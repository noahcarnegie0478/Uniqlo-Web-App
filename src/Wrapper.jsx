import React from "react";
import App from "./App.jsx";
import { ItemProvider } from "./Context/ItemProvider.jsx";
import { UserProvider } from "./Context/userProvider.jsx";
function Wrapper() {
  return (
    <UserProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </UserProvider>
  );
}

export default Wrapper;
