// import { useMemo } from "react";
// import "./Education1.css";
// import "./SkillsAndProjectsSeeker.css";

// const Education1 = ({ frameTitle, frameDivTop }) => {
//   const education1Style = useMemo(() => {
//     return {
//       top: frameDivTop,
//     };
//   }, [frameDivTop]);

//   return (
//     <div className="education-11" style={education1Style}>
//       <div className="frame-parent9">
//         <div className="frame-title">{frameTitle === "1" ? <img src="/1.png" /> : <img src="/2.png" />}</div>
//         <div className="frame-wrapper2">
//           <div className="frame-parent10">
//             <div className="frame-parent11">
//               <div className="component-6-parent13">
//                 <div className="component-618">
//                   <div className="rectangle-div" style={{right:"237px"}}  />
//                 </div>
//                 {/* <div className="title-of-the1">Title of the project</div> */}
//                 <input
//                     className="role-in-the"
//                     placeholder="Title of the project"
//                     type="text"
//                     style={{right:"236px"}}
//                   />
//               </div>
//               <div className="component-6-parent14"> 
//                 <div className="component-619" style={{width: "286px"}}>
//                   <div className="rectangle-div" style={{right: "104px"}}/>
//                 </div>
//                 <input
//                   className="role-in-the" 
//                   placeholder="Role in the project"
//                   type="text"
//                   style={{right: "94px"}}
//                 />
//               </div>
//             </div>
//             <textarea
//               className="frame-textarea"
//               placeholder="Short description about project"
//               rows={7}
//               cols={34}
//               style={{right: "236px" , width: "681px" ,position: "relative"}}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="component-6-parent15"> 
//         <div className="component-620">
//           {/* <div className="component-6-child6" /> */}
//           <div className="rectangle-div" style={{top:"30px"}} />
//         </div>
//         {/* <div className="link-of-website1">
//           Link of website/ Github/ prototype
//         </div> */}
//         <input
//                     className="role-in-the"
//                     placeholder="Link of website"
//                     type="text"
//                     style={{top:"25px" , left: "10px"}}
//                   />
//       </div>
//     </div>
//   );
// };

// export default Education1; 


import { useMemo } from "react";

const Education1 = ({ prop, frameDivTop }) => {
  const education11Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div
      className="absolute top-[158px] left-[calc(50%_-_673px)] w-[777px] flex flex-col items-end justify-start gap-[18px] max-w-full text-left text-72xl-3 text-f709c font-font"
      style={education11Style}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[37px] max-w-full">
        <div className="w-14 flex flex-row items-start justify-start">
          <div className="flex-1 relative mq450:text-8xl mq750:text-27xl">
            {prop}
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 ml-[-6px] text-7xl-9">
            <div className="relative font-semibold inline-block min-w-[12px] z-[2] mq450:text-3xl">
              *
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[445px] max-w-full text-base-3 text-silver-100 mq675:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq675:flex-wrap">

              <div className="h-11 w-[291px] relative">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full box-border border-[0.8px] border-solid border-silver-100">
                  <input
                    className="w-full border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1] bg-fafafa box-border border-[0.8px] border-solid border-silver-100"
                    placeholder="Title of the project"
                    type="text"
                  />
                </div>
              </div>

              <div className="h-11 w-[291px] relative">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start h-full">
                  <div className="h-11 flex-1 relative bg-fafafa box-border border-[0.8px] border-solid border-silver-100" />
                </div>
                <input
                  className="w-full [border:none] [outline:none] font-font text-base-3 bg-[transparent] absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
                  placeholder="Role in the project"
                  type="text"
                />
              </div>
            </div>
            <textarea
              className="bg-fafafa h-[139px] w-auto [outline:none] self-stretch relative box-border py-2.5 px-[20.399999999999636px] font-font text-base-6 text-silver-100 border-[0.8px] border-solid border-silver-100"
              placeholder="Short description about project"
              rows={7}
              cols={34}
            />
          </div>
        </div>
      </div>
      <div className="w-[685px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-base-3 text-silver-100">
        <div className="h-11 flex-1 relative max-w-full">
          <div className="absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start max-w-full">
            <div className="self-stretch flex-1 relative bg-fafafa box-border max-w-full border-[0.8px] border-solid border-silver-100"></div>
          </div>
          <input
            className="w-[250px] border-none outline-none font-font text-base-3 bg-transparent absolute top-[10px] left-[19px] text-silver-100 text-left inline-block p-0 z-[1]"
            placeholder="Link of website/ Github/ prototype"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Education1;
