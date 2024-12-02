import { Link, useNavigate } from "react-router-dom";
import { Img } from "@/components";
import { useState } from "react";

export const Register = () => {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [homeCheck, setHomeCheck] = useState(false);
  const [workCheck, setWorkCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const handHomeCheck = () => setHomeCheck(!homeCheck);
  const handWorkCheck = () => setWorkCheck(!workCheck);

  const passwordFunction = () => {
    setShowPassword((prev) => !prev);
    if (showPassword) {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  };

  const handReset = () => {
    if (
      (homeCheck || workCheck) &&
      firstName &&
      email &&
      password &&
      phoneNumber &&
      address
    ) {
      localStorage.setItem("token", "true !");
      setError("");
      navigate("/home");
      homeCheck("");
      workCheck("");
      setFirstName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
    } else {
      if (
        !firstName ||
        !email ||
        !password ||
        !phoneNumber ||
        !address ||
        !homeCheck ||
        !workCheck
      ) {
        setError("The fields are empty");
        const interval = setInterval(() => {
          setError("");
          clearInterval(interval);
        }, 3000);
      }
    }
  };

  const enterButton = (e) => {
    if (e.key === "Enter") {
      handReset();
    }
  };

  return (
    <>
      <div className="bg-[url(/src/assets/background.svg)] bg-no-repeat  bg-center h-screen overflow-x-hidden">
        <Img />
        <div className="w-full justify-center flex">
          <div className="w-full bg-[#FFF6EE] text-center max-w-[700px] mx-auto rounded-[20px]">
            <div className="">
              <p className="max-w-[400px] mx-auto font-[500] text-[25px] mb-[50px] mt-[30px]">
                Create a new account
              </p>
            </div>
            <div className="flex justify-between max-w-[650px] mx-auto mb-[55px]">
              <div className="flex flex-col w-full max-w-[300px] gap-[20px]">
                <div className="relative w-full flex items-center">
                  <input
                    onKeyDown={enterButton}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="font-[500] text-[15px] relative w-full border-2 border-[#704A24] py-[7px] px-[10px] pr-[30px] outline-none rounded-lg"
                    type="text"
                    placeholder="First name"
                  />
                  <i className="cursor-pointer text-[#704A24] text-[19px] fa-solid absolute fa-user right-[10px]"></i>
                </div>
                <div className="relative w-full flex items-center">
                  <input
                    onKeyDown={enterButton}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-[500] text-[15px] relative w-full border-2 border-[#704A24] py-[7px] px-[10px] pr-[30px] outline-none rounded-lg"
                    type="email"
                    placeholder="Email"
                  />
                  <i className="cursor-pointer text-[#704A24] text-[19px] fa-solid absolute fa-envelope right-[10px]"></i>
                </div>
                <div className="relative w-full flex items-center">
                  <input
                    onKeyDown={enterButton}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="font-[500] text-[15px] relative w-full border-2 border-[#704A24] py-[7px] px-[10px] pr-[30px] outline-none rounded-lg"
                    type="number"
                    placeholder="Phone number"
                  />
                  <i className="cursor-pointer text-[#704A24] text-[19px] fa-solid absolute fa-phone right-[10px]"></i>
                </div>
                <div className="relative w-full flex items-center">
                  <input
                    onKeyDown={enterButton}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-[500] text-[15px] relative w-full border-2 border-[#704A24] py-[7px] px-[10px] pr-[30px] outline-none rounded-lg"
                    type={passwordInputType}
                    placeholder="Password"
                  />
                  <i
                    onClick={passwordFunction}
                    className="cursor-pointer text-[#704A24] text-[19px] fa-solid absolute fa-eye right-[10px]"
                  ></i>
                </div>
              </div>
              <div className="flex-col w-full flex max-w-[300px] gap-[20px]">
                <div className="relative w-full flex items-center">
                  <input
                    onKeyDown={enterButton}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="font-[500] text-[15px] relative w-full border-2 border-[#704A24] py-[7px] px-[10px] pr-[30px] outline-none rounded-lg"
                    type="address"
                    placeholder="Address"
                  />
                  <i className="cursor-pointer text-[#704A24] text-[19px] fa-solid absolute fa-location-dot right-[10px]"></i>
                </div>
                <div className="relative w-full max-w-[320px] justify-between flex mx-auto">
                  <input
                    type="radio"
                    name="uz"
                    id="work"
                    onChange={handWorkCheck}
                    checked={workCheck}
                    className="hidden"
                  />
                  <label onClick={handWorkCheck} htmlFor="work">
                    <button className="bg-white py-[5px] border-2 border-[#704A24] px-[45px] rounded-md font-[450]">
                      Work
                    </button>
                  </label>
                  <input
                    type="radio"
                    name="uz"
                    id="home"
                    checked={homeCheck}
                    onChange={handHomeCheck}
                    className="hidden"
                  />
                  <label onClick={handHomeCheck} htmlFor="home">
                    <button className="bg-white py-[5px] border-2 border-[#704A24] px-[45px] rounded-md font-[450]">
                      Home
                    </button>
                  </label>
                </div>
                <div className="relative flex gap-1 mx-auto border-2 border-[#704A24] py-[2px] px-[10px] rounded-[20px] font-[450]">
                  <input type="checkbox" id="different" />
                  <label htmlFor="different">Different billing address</label>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col relative">
              <button
                onClick={handReset}
                className="bg-[#FBA651] w-full gap-1 max-w-[350px] font-[500] text-[20px] py-[10px] rounded-[30px] flex justify-center items-center mx-auto mb-[10px]"
              >
                Create account <i className="fa-solid fa-plus"></i>
              </button>
              <Link to={"/login"} className="mb-[20px]">
                <button>Already have an account</button>
              </Link>
              <p className="absolute bottom-0 text-red-600 font-[500]">
                {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
