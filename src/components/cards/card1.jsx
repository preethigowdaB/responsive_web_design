import React from "react";
import card1 from "../../assets/images/card1.jpeg.png";
import card2 from "../../assets/images/card2.jpeg";
import card3 from "../../assets/images/card3.jpeg";
import card4 from "../../assets/images/card4.jpeg";
import card5 from "../../assets/images/card5.jpeg";
import card6 from "../../assets/images/card6.jpeg";
const Card1 = () => {
  return (
    <div className="">
      <div className="row g-0 gap-5 image-center image-sm-center ">
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card1}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_gray py-1 ps-2 border-0 fs_14 fw_500">
              Cross-Device Sync
            </button>
            <p className="card-text fs_14 text-secondary">
              Keep your schedule in sync across all your devices, ensuring
              seamless access to your calendar, events, and tasks wherever you
              go.
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card4}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_orange py-1 ps-2 border-0 fs_14 fw_500">
              Auto Event Import
            </button>
            <p className="card-text fs_14 text-secondary">
              Automatically import events from emails, social media, and other
              sources, so you never miss a beat or have to manually input
              details.
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card5}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_gray py-1 ps-2 border-0 fs_14 fw_500">
              Task Delegation
            </button>
            <p className="card-text fs_14 text-secondary">
              Easily assign tasks to team members, family, or friends, promoting
              shared responsibility and seamless collaboration.
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card4}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_gray py-1 ps-2 border-0 fs_14 fw_500">
              Voice Command Integration
            </button>
            <p className="card-text fs_14 text-secondary">
              Quickly create events, set reminders, or reschedule appointments
              with voice commands, thanks to compatibility with popular virtual
              assistants.
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card5}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_orange py-1 ps-2 border-0 fs_14 fw_500">
              Customizable Alerts
            </button>
            <p className="card-text fs_14 text-secondary">
              Personalize notification types and timings for events, tasks, and
              goals, ensuring you stay on track and informed without feeling
              overwhelmed..
            </p>
          </div>
        </div>
        <div className="card border-0" style={{ width: "20rem" }}>
          <div className="card_bg_color rounded-4">
            <img
              className="mx-5 my-4 "
              src={card6}
              alt="Card image cap"
              height={200}
              width={200}
            />
          </div>
          <div className="card-body">
            <button className="card-title rounded-5 bg_purple py-1 ps-2 border-0 fs_14 fw_500">
              Cross-Device Sync
            </button>
            <p className="card-text fs_14 text-secondary">
              Keep your schedule in sync across all your devices, ensuring
              seamless access to your calendar, events, and tasks wherever you
              go.
            </p>
          </div>
        </div>
      </div>
      <div className="my-md-5 py-md-3 my-2 text-sm-center">
        <button className="py-2 px-sm-4 px-3 rounded-4 border-0 mt-sm-5 mt-2 fs_18 fs_sm_14 fw_400 ">
        They already love our products 😍
        </button>
        <h1 className="my-2 fs_55 fs_md_40 fs_sm_30 fw_700 ">
        See what our users say about us
        </h1>
      </div>
    </div>
  );
};

export default Card1;
