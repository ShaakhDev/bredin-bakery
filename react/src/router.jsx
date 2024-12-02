import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainRouter } from "./mainRouter";
import { Header } from "./navbar/header/header";
import { MainHeader } from "./navbar/mainHeader/mainHeader";
import { Welcome } from "./pages/welocme/welcome";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Card } from "./pages/card/card";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<MainRouter />}>
          <Route element={<MainHeader />}>
            <Route path="home" element={<Home />} />
            <Route path="card" element={<Card />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
