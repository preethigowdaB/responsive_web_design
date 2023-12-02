import React from "react";
import icon4 from "../../assets/images/icon4.jpeg";
import img5 from "../../assets/images/img5.jpeg";
const Section4 = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={img5} alt="calender" className="w_sm_300 w_md_400 w_600" />
        </div>
        <div className="col-md-6">
          <button className=" py-2 rounded-5 bg_orange text-dark fw_500 my-3 border-0">
            {" "}
            Smart Reminders & Task
          </button>
          <h1 className="fs_43 fs_sm_30 fw_700">
            Never miss an important deadline or event again
          </h1>
          <p className=" my-4 fs_22 fs_sm_18 text-secondary ">
            Never miss an important deadline again with our AI-driven
            notifications. Our app intelligently analyzes your schedule to
            prioritize what's most important, keeping you on track and ensuring
            your day is productive and stress-free.
          </p>
          <div className="">
            <div className="bg-dark text-light ms-5 border_3 mx-3 px-3 py-2 fw_500 fs_sm_14">
              <p className="fs_18">
                I've recommended this app to all my friends and colleagues!
              </p>
              <p className="text-secondary">Karl, CTO of a cool startup</p>
            </div>
            <img src={icon4} alt="icon" height={70} className="" />
          </div>
        </div>
      </div>
      <div className="my-sm-5 py-sm-3 text-sm-center">
        <button className="py-2 px-sm-4 px-3 rounded-4 border-0 mt-sm-5 mt-2 fs_18 fs_sm_14 fw_400 ">
        And so much more... 💼
        </button>
        <h1 className="my-2 fs_55 fs_md_40 fs_sm_30 fw_700 ">
        Our features to make your life easier
        </h1>
      </div>
    </div>
  );
};

export default Section4;
