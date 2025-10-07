import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import router from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RootContextProvider from "./Version/version4/contexts/RootContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RootContextProvider>
        <RouterProvider router={router} />
      </RootContextProvider>
    </HelmetProvider>
  </StrictMode>
);
