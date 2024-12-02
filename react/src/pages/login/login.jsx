import { Link } from "react-router-dom";
import { Img } from "@/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const [error, setError] = useState("");

  const passwordFunction = () => {
    setShowPassword((prev) => !prev);
    if (showPassword) {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  };

  const handReset = () => {
    if (password && phoneNumber) {
      localStorage.setItem("token", "true !");
      setPassword("");
      setPhoneNumber("");
      setError("");
      navigate("/home");
    } else {
      if (!phoneNumber) {
        setError("Please enter your phone number");

        const interval = setInterval(() => {
          setError("");
          clearInterval(interval);
        }, 3000);
      }
      if (!password) {
        setError("Please enter your password");

        const interval = setInterval(() => {
          setError("");
          clearInterval(interval);
        }, 3000);
      }
      if (!phoneNumber && !password) {
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
          <div className="w-full bg-[#FFF6EE] text-center max-w-[500px] mx-auto rounded-[20px]">
            <div className="">
              <p className="max-w-[400px] mx-auto font-[500] text-[25px] mb-[50px] mt-[30px]">
                Login into your account
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="relative w-full max-w-[320px] mx-auto flex items-center">
                <input
                  onKeyDown={enterButton}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="number"
                  className="font-[500] text-[15px] relative border-2 w-full border-[#704A24] outline-none py-[7px] px-[10px] pr-[30px] rounded-lg"
                  placeholder="Phone number"
                />
                <i className="cursor-pointer fa-solid fa-phone absolute right-[10px] text-[#704A24] text-[19px]"></i>
              </div>
              <div className="relative w-full max-w-[320px] mx-auto flex items-center mb-[30px]">
                <input
                  onKeyDown={enterButton}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={passwordInputType}
                  className="font-[500] text-[15px] relative border-2 w-full border-[#704A24] outline-none py-[7px] px-[10px] pr-[30px] rounded-lg"
                  placeholder="Password"
                />
                <i
                  onClick={passwordFunction}
                  className="cursor-pointer fa-solid fa-eye absolute right-[10px] text-[#704A24] text-[19px]"
                ></i>
              </div>
            </div>
            <p className="cursor-pointer font-[400] mb-[120px]">
              Reset my password
            </p>
            <div className="mb-[20px]">
              <button
                onClick={handReset}
                className="bg-[#FBA651] w-full max-w-[350px] font-[500] text-[20px] py-[10px] rounded-[30px] flex justify-center items-center mx-auto mb-[10px]"
              >
                Log in <i className="fa-solid fa-chevron-right mt-[3px]"></i>
              </button>
              <Link to={"/register"}>Create a new account</Link>
              <p className="absolute w-full max-w-[500px] justify-center items-center flex mx-auto mt-[-4px] text-red-600 font-[500]">
                {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
