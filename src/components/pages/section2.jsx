import React from 'react'
import img3 from '../../assets/images/img3.jpeg'
import icon2 from '../../assets/images/icon2.jpg'
const Section2 = () => {
  return (
    <div>
    <div className="row g-0">
    <div className="col-md-6 ms-3 ps-3 ps-sm-0 ms-sm-0 image-center ">
        <img src={img3} alt="calender" className=" w_500 h_500 w_sm_100 h_sm_200 h_md_300 w_md_300 w_lg_380 h_lg_450" />
      </div>
      <div className="col-md-6">
        <button className=" py-2 rounded-5 bg_orange text-dark fw_500 my-3 border-0">
          {" "}
          Smart Reminders & Task
        </button>
        <h1 className='fs_43 fs_sm_30 fw_700'>Never miss an important deadline or event again</h1>
        <p className=" my-4 fs_22 fs_sm_18 text-secondary ">
        Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
        </p>
        <div className="">
          <div className="bg-dark text-light ms-5 border_3 mx-3 px-3 py-2 fw_500 fs_sm_14">
            <h1 className="fs_18">
            I love how user-friendly this app is! It's so easy to add events and set reminders!
            </h1>
            <p className="text-secondary">Adam, entrepreneur </p>
          </div>
          <img src={icon2} alt="icon" height={70} className="object-cover"/>

        </div>
      </div>
     
    </div>
  </div>
  )
}

export default Section2