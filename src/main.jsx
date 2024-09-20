import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Set the basename according to the environment
const basename = import.meta.env.MODE === "development" ? "/" : "/portfolio/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/portfolio/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
