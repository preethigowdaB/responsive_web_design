import React from "react";
import calender from "../../assets/images/image1.jpeg";
import icon1 from "../../assets/images/img2.jpeg";
const Section1 = () => {
  return (
    <div>
      <div className="row g-0 mb-sm-5 pb-sm-5 mt-3">
        <div className="col-md-6">
          <button className="px-3 py-2 rounded-5 bg_orange text-dark fw_500 my-3 border-0">
            Seamless Scheduling
          </button>
          <h1 className="fs_43 fs_md_33 fs_sm_30 fw_700">Focus on what matters most for you</h1>
          <p className=" my-4 fs_22 fs_sm_18 text-secondary ">
            Effortlessly plan your day with our intuitive drag-and-drop
            interface. Sync with multiple calendar platforms, import events from
            emails, and add participants with just a few clicks.
          </p>
          <div className=" ms-5">
            <div className="bg-dark text-light ms-5 border_3 mx-3 px-3 py-2 fw_500 fs_sm_14">
              <h1 className="fs_18">
                I tested many calendar apps. This app is the best of all! It
                saves me hours of time.
              </h1>
              <p className="text-secondary">Carla, Head of Finance </p>
            </div>
            <img src={icon1} alt="icon" height={70} className="object-cover"/>

          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={calender} alt="calender" className=" w_500 h_500 w_sm_100 h_sm_200 h_md_300 w_md_300" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
