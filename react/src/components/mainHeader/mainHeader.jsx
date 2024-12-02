import { useEffect, useState } from "react";

export const MainHeader = () => {
  const [translateY, setTranslateY] = useState("-150%");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTranslateY("0%");
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className="w-full bg-white mt-1 px-[10px] translate-x-[-100%]"
        style={{
          transform: `translateY(${translateY})`,
          transition: "transform 0.5s ease",
        }}
      >
        <div className="flex w-full items-center max-w-[1460px] mx-auto ">
          <div className="w-full  max-w-[300px]">
            <img
              className="hover:scale-[1.05] cursor-pointer transition-all duration-500 ease-in-out active:scale-[0.90]"
              src="src/assets/header-logo.svg"
              alt="Rasm bor !"
            />
          </div>
          <div className="flex w-full items-center justify-between font-[450] text-[#704A24] text-[17px] cursor-pointer">
            <div className="">
              <p className="text-[22px] font-[500] hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                Home
              </p>
            </div>
            <div className="flex w-full max-w-[456px] justify-between">
              <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-bell"></i>
                <p>Notification</p>
              </div>
              <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Go to Cart</p>
              </div>
              <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-user"></i>
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
