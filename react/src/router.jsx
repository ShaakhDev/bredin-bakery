import { Route, Routes } from "react-router-dom";
import { MainRouter } from "./mainRouter";
import { MainHeader } from "@/components";
import { Welcome } from "pages";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Card } from "./pages/card/card";
import { Layout } from "./layout/layout";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainRouter />}>
          <Route element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Card />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
