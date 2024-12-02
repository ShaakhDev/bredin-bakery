import { Sidebar } from "../../navbar/sidebar/sidebar";
import { HomeSection } from "./homeSection/homeSection";

export const Home = () => {
  return (
    <>
      <div className="bg-blue-600 w-full h-[92vh]">
        <div className="flex w-full justify-between bg-red-600 ">
          <div className="bg-[#FAFAFA] h-[92vh] font-[450] w-full max-w-[320px]">
            <Sidebar />
          </div>
          <div className="bg-[#FFF6EE] font-[450] h-[92vh] w-full">
            <HomeSection />
          </div>
        </div>
      </div>
    </>
  );
};
