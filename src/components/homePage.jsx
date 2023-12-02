import React from "react";
import ratings from "../assets/images/rating.jpeg.png";
import img2 from "../assets/images/img3.jpeg";
const HomePage = () => {
  return (
    <div className="  mt-md-5 text-sm-center pt-md-5 mt-3">
      <div className="row g-0">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="fs_sm_14 fs_18 rounded-5 fw_500 mx-md-5">
            <p className="mx-md-3 py-1"> An other way to manage time</p>
          </div>
          <h1 className="fw_700 fs_55 fs_md_40 fs_sm_30">
            Your new favourite calender 🗓️ app
          </h1>
          <div className="mx-md-5">
            <p className="fs_19 text-secondary  fw_400 my-sm-4  fs_sm_14">
              Here you should explain how cool your app is.Remember, focus on
              the benefits for your users,not on the features.
            </p>
          </div>
          <button className="py-md-3 py-2 fw_500 fs_19 fs_sm_14 px-md-5 mt-1 px-3 bg-dark border-0 rounded-3 text-white ">
            Get started,it's free
          </button>
          <p className="fs_14 text-secondary mt-2">
            Free 14 dats trails,no creidt card needed.
          </p>
          <img
            src={ratings}
            alt="5.0"
            className="my-3 d-md-block d-none ms-5 ps-5 "
          />
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div>
        <img
          src={img2}
          alt="image"
          className="rounded-4 my-sm-5 my-3 py-1 border border-secondary w_1000 w_md_300 "
        />
      </div>
      <div className="my-sm-5 py-sm-3">
        <button className="py-2 px-sm-4 px-3 rounded-4 border-0 mt-sm-5 mt-2 fs_18 fs_sm_14 fw_400 ">
          Our main features 🦸🏼
        </button>
        <h1 className="my-2 fs_55 fs_md_40 fs_sm_30 fw_700 ">
          Discover your new superpowers
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
