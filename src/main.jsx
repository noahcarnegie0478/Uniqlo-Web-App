import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ItemProvider } from "./Context/ItemProvider.jsx";
import { UserProvider } from "./Context/userProvider.jsx";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(<Wrapper />);
