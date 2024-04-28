import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";



const BasicDetailsseeker1 = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onFrameContainerClick = useCallback(() => {
    handleSave();
  }, [navigate]);

  const handleSave = async () => {
    await setUserInfo({
    ...userInfo,
    firstname: firstName,
    lastname: lastName,
    date: dateOfBirth,
    contact: contactNumber,
    city: city,
    email: email,
    disc: description,
  });
  console.log(userInfo);
  navigate("/educationseeker");
};


  const onGoBackTextClick = useCallback(() => {
    navigate("/jobs");
  }, [navigate]);


  return (
    <div className="w-full relative bg-fafafa h-[713px] overflow-y-auto flex flex-row flex-wrap items-center justify-start pt-5 pb-[200px] pr-[42px] pl-[63px] box-border gap-[43px_102px] text-left text-base-3 text-silver-100 font-font">
      

      <div className="w-[180px] absolute !m-[0] top-[129px] left-[458px] text-lgi-5 font-semibold text-color inline-block z-[1]">
        Let’s get you started
      </div>
      <div className="w-[1431.5px] absolute !m-[0] top-[93.8px] left-[62.8px] [filter:drop-shadow(0px_10px_11px_rgba(229,_210,_131,_0.07))] box-border h-[0.5px] z-[2] border-t-[0.5px] border-solid border-e5d283" />
      <div className="w-[207px] absolute !m-[0] top-[180px] left-[calc(50%_-_644px)] h-[252px] z-[3]">
        <div className="absolute top-[0px] left-[calc(50%_-_103.5px)] rounded-[50%] bg-gainsboro-200 w-[207px] h-[207px]" />
        <div className="absolute top-[230px] left-[calc(50%_-_62.5px)]">
          Profile photo
        </div>
        <img
          className="absolute top-[234px] left-[151px] w-[17.8px] h-[18px]"
          alt=""
          src="/border_color.png"
        />
      </div>
      <div className="w-[622px] absolute !m-[0] top-[191px] left-[calc(50%_-_311px)] h-[379px] z-[4]">
        <div className="absolute top-[0px] left-[calc(50% - 311px)] w-[291px] h-7">
          <input
            type="text"
            placeholder="First name"
            className="w-full h-full p-2 bg-transparent border-[0.8px] border-solid border-silver-100 outline-none text-base-3"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "8" }}
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)
            }}
          />
        </div>

    
        <div className="absolute top-[222px] left-[0px] w-[622px] h-[157px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
          <textarea
            placeholder="Short description about yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="absolute inline-block  w-[622px] h-[157px] right-[7px] bg-transparent border-none outline-none"
          ></textarea>
        </div>

        <div className="absolute top-[74px] left-[calc(50% - 311px)] w-[291px] h-7">
          <input
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full h-full p-2 bg-transparent border-[0.8px] border-solid border-silver-100 outline-none text-base-3"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "8" }}
          />
        </div>

        <div className="absolute top-[148px] left-[0px] w-[43px] h-11">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
        </div>

        <div className="absolute top-[148px] left-[331px] w-[291px] h-7">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full p-2 bg-transparent border-[0.8px] border-solid border-silver-100 outline-none text-base-3"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "8" }}
          />
        </div>

        <div className="absolute top-[76px] left-[331px] w-[291px] h-7">
          <input
            type="email"
            placeholder="City/Region"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-full p-2 bg-transparent border-[0.8px] border-solid border-silver-100 outline-none text-base-3"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "8" }}
          />
        </div>

        <div className="absolute top-[0px] left-[339px] w-[291px] h-7">
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full h-full p-2 bg-transparent border-[0.8px] border-solid border-silver-100 outline-none text-base-3"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "8" }}
          />
        </div>


        <div className="absolute top-[148px] left-[49px] w-[242px] h-11">
          <div className="absolute top-[0px] left-[0px] w-[242px] h-11">
            <input
              type="text"
              value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-fafafa box-border border-[0.8px] border-solid border-silver-100"
              placeholder="Contact number"
            />
          </div>
        </div>
        <div className="absolute top-[158px] left-[6px]">+91</div>

      </div>
      <div
        className="!m-[0] absolute top-[641px] left-[704px] rounded-[3.96px] bg-color flex flex-row items-center justify-center py-[6.4px] px-14 gap-[16px] cursor-pointer z-[5] text-base-7 text-celestial-hue-celestial-light"
        onClick={onFrameContainerClick}
      >
        <div className="w-[75px] relative font-semibold inline-block h-[25px] shrink-0">
          Education
        </div>
        <img
          className="w-[5.8px] relative h-[11.6px]"
          alt=""
          src="/text-frame.svg"
        />
      </div>
      <div
        className="w-[59px] absolute !m-[0] top-[649px] left-[584px] text-e5d283 inline-block cursor-pointer z-[6]"
        onClick={onGoBackTextClick}
      >
        Go back
      </div>
      <div className="!m-[0] absolute top-[28px] left-[63px] flex flex-col items-start justify-start z-[7]">
        <img className="w-[71px] relative h-9" alt="" src="/group-2.png" />
      </div>

      <div className="w-[447.5px] absolute !m-[0] top-[19px] left-[544px] h-[60px] z-[9] text-smi-7 text-f709c">
        <img
          className="absolute top-[17px] left-[20px] w-[403px] h-[3.8px]"
          alt=""
          src="/Property1-0.png"
        />
        <div className="absolute top-[calc(50%_+_5px)] left-[calc(50%_-_220.75px)] flex flex-row items-center justify-center text-lg-6">
          <div className="relative font-semibold">Info</div>
        </div>
        <div className="absolute top-[calc(50%_+_9px)] left-[calc(50%_+_15.75px)] flex flex-row items-center justify-center py-0 px-px">
          <div className="relative">Skills and Projects</div>
        </div>
        <div className="absolute top-[calc(50%_+_9px)] left-[calc(50%_-_101.25px)] flex flex-row items-center justify-center py-0 px-px">
          <div className="relative">Education</div>
        </div>
        <div className="absolute top-[calc(50%_+_9px)] left-[calc(50%_+_173.75px)] flex flex-row items-center justify-center py-0 px-px">
          <div className="relative">Portfolio</div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[39.7px] h-[39.7px]"
          alt=""
          src="/Property1-info.png"
        />
        <img
          className="absolute top-[0px] left-[271px] w-[39.7px] h-[39.7px]"
          alt=""
          src="/Property1-skills.png"
        />
        <img
          className="absolute top-[0px] left-[132px] w-[39.7px] h-[39.7px]"
          alt=""
          src="/Property1-education.png"
        />
        <img
          className="absolute top-[0px] left-[403px] w-[39.7px] h-[39.7px]"
          alt=""
          src="/Property1-work_portfolio.png"
        />
      </div>
    </div>
  );
};

export default BasicDetailsseeker1;





