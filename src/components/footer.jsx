import React from "react";
import twitter from "../assets/images/twitter_icon.jpeg.png";
import facebook from "../assets/images/fb_icon.jpeg.png";
import linkedIn from "../assets/images/linkedIn_icon.jpeg.png";
const Footer = () => {
  return (
    <div className="bg_gray p-5">
      <div className="row g-0">
        <div className="col-lg-3  col-sm-6">
          <h6 className="fs_18 fw_500 mb-3 ">Milton</h6>
          <p className="fs_14 text-secondary">
            A short text explaining
            <br /> why my startup is so cool
          </p>
          <p className="fs_14 text-secondary">© My super start-up</p>
          <div className="d-flex ">
            <img src={twitter} alt="twitterIcon" height={30} className="mx-2" />
            <img src={facebook} alt="facebook" height={30} className="mx-2" />
            <img src={linkedIn} alt="linkedIn" height={30} className="mx-2" />
          </div>
        </div>
        <div className="col-lg-2">
          <h6 className="fs_18 fw_500 mb-3">Products</h6>
          <p className="fs_14 text-secondary fw_400">Features</p>
          <p className="fs_14 text-secondary fw_400">Testimonials</p>
          <p className="fs_14 text-secondary fw_400">Pricing</p>
          <p className="fs_14 text-secondary fw_400">FAQs</p>
        </div>
        <div className="col-lg-2">
          <h6 className="fs_18 fw_500 mb-3">Resources</h6>
          <p className="fs_14 text-secondary fw_400">Change log</p>
          <p className="fs_14 text-secondary fw_400">Help center</p>
          <p className="fs_14 text-secondary fw_400">Blog</p>
          <p className="fs_14 text-secondary fw_400">Contact</p>
        </div>
        <div className="col-lg-2">
          <h6 className="fs_18 fw_500 mb-3">Others</h6>
          <p className="fs_14 text-secondary fw_400">Privacy</p>
          <p className="fs_14 text-secondary fw_400">Terms</p>
          <p className="fs_14 text-secondary fw_400">Affiliation</p>
          <p className="fs_14 text-secondary fw_400">Press</p>
        </div>
        <div className="col-lg-3  col-sm-6">
          <h6 className="fs_18 fw_500 mb-3">From the blog</h6>
          <p className="fs_14 text-secondary fw_400">Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</p>
          <p className="fs_14 text-secondary fw_400">Organizing Your Calendar for Enhanced Productivity and Focus</p>
          <p className="fs_14 text-secondary fw_400">The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</p>
          <p className="fs_14 text-secondary fw_400">Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</p>


        </div>
      </div>
    </div>
  );
};

export default Footer;
