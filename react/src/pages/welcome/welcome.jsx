import { Link } from "react-router-dom";
import { Img } from "@/components";

export const Welcome = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/background.svg)] bg-no-repeat  bg-center h-screen overflow-x-hidden">
        <Img />
        <div className="w-full justify-center flex">
          <div className="w-full bg-white text-center max-w-[500px] mx-auto rounded-[20px]">
            <div className="">
              <p className="max-w-[400px] mx-auto font-[500] text-[25px] mb-[50px] mt-[30px]">
                To continue to checkout, log in or create a new account
              </p>
            </div>
            <div className="flex flex-col w-full gap-[10px] justify-center items-center mb-[20px]">
              <Link to={"/login"} className="w-full">
                <button className="bg-[#FBA651] py-[14px] max-w-[350px] w-full rounded-[30px] font-[500] text-[18px]">
                  Login into your account
                </button>
              </Link>
              <Link to={"/register"} className="w-full">
                <button className="bg-[#FDCB9A] py-[14px] max-w-[350px] w-full rounded-[30px] font-[500] text-[18px]">
                  Create a new account
                </button>
              </Link>
            </div>
            <hr className="border-none h-[2px] bg-[#ADAAA8] max-w-[350px] mx-auto mb-[20px]" />
            <div className="flex flex-col gap-[15px] mb-[30px]">
              <button className="bg-[#E1E0DF] py-[10px] font-[500] max-w-[260px] mx-auto w-full rounded-[30px]">
                <i className="fa-brands fa-facebook"></i> Continue with Facebook
              </button>
              <button className="bg-[#E1E0DF] py-[10px] font-[500] max-w-[260px] mx-auto w-full rounded-[30px]">
                <i className="fa-brands fa-google"></i> Continue with Google
              </button>
              <button className="bg-[#E1E0DF] py-[10px] font-[500] max-w-[260px] mx-auto w-full rounded-[30px]">
                <i className="fa-solid fa-chevron-right"></i> Pay without
                account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
