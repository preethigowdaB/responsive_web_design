import React from 'react'
import img4 from '../../assets/images/img4.jpeg'
import icon3 from '../../assets/images/icon3.jpeg'
const Section3 = () => {
  return (
    <div>
    <div className="row g-0 mb-sm-5 pb-sm-5 mt-3">
      <div className="col-md-6 ">
        <button className="px-3 py-2 text-center rounded-5 bg_orange text-dark fw_500 my-3 border-0">
          {" "}
          Seamless Scheduling
        </button>
        <h1 className="fs_43 fs_sm_30 fw_700 ">Focus on what matters most for you</h1>
        <p className=" my-4 fs_22 fs_sm_18 text-secondary ">
          Effortlessly plan your day with our intuitive drag-and-drop
          interface. Sync with multiple calendar platforms, import events from
          emails, and add participants with just a few clicks.
        </p>
        <div className="ms-5">
          <div className="bg-dark text-light ms-5 border_3 mx-3 px-3 py-2 fw_500 fs_sm_14">
            <h1 className="fs_18">
            I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.
            </h1>
            <p className="text-secondary">Annie, Designer</p>
          <div/>
        </div>

          <img src={icon3} alt="icon" height={70} className="object-cover"/>

      </div>
      </div>
      <div className="col-md-6 text-center">
        <img src={img4} alt="calender" className="w_sm_300 w_md_400 w_600"/>
      </div>
    </div>
  </div>
  )
}

export default Section3