import { Outlet, useLocation } from "react-router-dom";
import { Sidebar, MainHeader } from "@/components";

export const Layout = () => {
  const { pathname } = useLocation();
  const isSidebarVisible =
    pathname !== "/login" && pathname !== "/register" && pathname !== "/cart";
  return (
    <>
      <MainHeader />
      <div className="bg-blue-600 w-full h-[92vh]">
        <div className="flex w-full justify-between bg-red-600 ">
          {isSidebarVisible && <Sidebar />}

          <div className="bg-[#FFF6EE] font-[450] h-[92vh] w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
