export const Sidebar = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] h-[92vh] font-[450] w-full max-w-[320px]">
        <div className="w-full text-center justify-center items-center flex flex-col">
          <div className="mt-[20px] mb-[30px]">
            <input
              className="border-none shadow-[0px_0px_10px_5px_#FBA65140] placeholder:text-[#704A24] placeholder:font-[600] placeholder:text-[20px] py-[10px] px-[30px] rounded-[50px] flex items-center justify-center outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex w-full justify-between items-center max-w-[300px] mb-[35px]">
            <p>4 Filters applied</p>
            <p>26 Results</p>
            <button className="bg-[#EDECEC] py-[3px] px-[7px] rounded-[5px]">
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </div>
          <div className="w-full mb-[35px]">
            <p className="mb-[5px] font-[400] text-[21px] text-start max-w-[300px] w-full mx-auto">
              Price
            </p>
            <div className="flex w-full max-w-[300px] justify-between mx-auto ">
              <p className="cursor-pointer border-2 border-[#704A24] text-[#704A24] px-5 rounded-[20px] py-[2px]">
                $
              </p>
              <p className="cursor-pointer border-2 border-[#704A24] text-[#704A24] px-5 rounded-[20px] py-[2px]">
                $$
              </p>
              <p className="cursor-pointer border-2 border-[#704A24] text-[#704A24] px-5 rounded-[20px] py-[2px]">
                $$$
              </p>
              <p className="cursor-pointer border-2 border-[#704A24] text-[#704A24] px-5 rounded-[20px] py-[2px]">
                $$$$
              </p>
            </div>
          </div>
          <div className="w-full mb-[35px]">
            <p className="text-start w-full max-w-[300px] mx-auto font-[400] text-[21px] mb-[5px]">
              Show me:
            </p>
            <div className="flex-col gap-[10px] flex w-full max-w-[300px] mx-auto">
              <div className="flex gap-[10px]">
                <p className="cursor-pointer bg-[#B07439] text-white px-5 rounded-[20px] py-[5px]">
                  All options
                </p>
                <p className="cursor-pointer border-2 py-[5px] px-[20px] border-[#704A24] rounded-[20px] text-[#704A24]">
                  Vegetarian
                </p>
              </div>
              <div className="flex gap-[10px]">
                <p className="cursor-pointer border-2 py-[5px] px-[20px] border-[#704A24] rounded-[20px] text-[#704A24]">
                  Vegan
                </p>
                <p className="cursor-pointer border-2 py-[5px] px-[20px] border-[#704A24] rounded-[20px] text-[#704A24]">
                  Gluten free
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-start w-full max-w-[300px] mx-auto font-[400] text-[21px] mb-[5px]">
              Don't show me goodies with:
            </p>
            <div className="flex flex-col w-full max-w-[300px] mx-auto gap-[7px]">
              <div className="flex w-full justify-between">
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="almonds" />
                  <label htmlFor="almonds">Almonds</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="cashews" />
                  <label htmlFor="cashews">Cashews</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="eggs" />
                  <label htmlFor="eggs">Eggs</label>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="hazelnuts" />
                  <label htmlFor="hazelnuts">Hazelnuts</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="milk" />
                  <label htmlFor="milk">Milk</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="nuts" />
                  <label htmlFor="nuts">Nuts</label>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="peanuts" />
                  <label htmlFor="peanuts">Peanuts</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="pecans" />
                  <label htmlFor="pecans">Pecans</label>
                </div>
                <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex">
                  <input type="checkbox" id="pistachios" />
                  <label htmlFor="pistachios">Pistachios</label>
                </div>
              </div>
              <div className="border-2 border-[#704A24] px-[7px] rounded-[20px] text-[#704A24] flex max-w-fit text-start">
                <input type="checkbox" id="walnuts" />
                <label htmlFor="walnuts">Walnuts</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
