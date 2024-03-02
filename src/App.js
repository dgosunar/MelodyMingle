import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/MelodyMingle/", element: <Home /> },
    { path: "/MelodyMingle/Contact", element: <Contact /> },
    { path: "/MelodyMingle/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
