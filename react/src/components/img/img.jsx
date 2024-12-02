export const Img = () => {
  return (
    <>
      <div className="flex w-full max-w-[1460px] mx-auto mt-[20px]">
        <div className="flex w-full max-w-[410px] justify-between items-center mb-[20px]">
          <button className="w-[40px] h-[40px] rounded-[50%] bg-white text-[#704A24] font-[600] text-[20px] flex justify-center items-center hover:text-white hover:bg-[#704A24] transition-all duration-500 ease-in-out">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="flex gap-[5px]">
            <img
              className="cursor-pointer rounded-[10px] hover:scale-[1.05] transition-all duration-500 ease-out"
              src={"/images/Image1.svg"}
              alt="Rasm bor"
            />
            <img
              className="cursor-pointer rounded-[10px] hover:scale-[1.05] transition-all duration-500 ease-out"
              src="/images/Image2.svg"
              alt="Rasm bor"
            />
            <img
              className="cursor-pointer rounded-[10px] hover:scale-[1.05] transition-all duration-500 ease-out"
              src="/images/Image2.svg"
              alt="Rasm bor"
            />
            <img
              className="cursor-pointer rounded-[10px] hover:scale-[1.05] transition-all duration-500 ease-out"
              src="/images/Image (3).svg"
              alt="Rasm bor"
            />
          </div>
        </div>
      </div>
    </>
  );
};
