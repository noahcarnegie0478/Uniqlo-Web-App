import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ItemProvider } from "./Context/ItemProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ItemProvider>
    <App />
  </ItemProvider>
);
