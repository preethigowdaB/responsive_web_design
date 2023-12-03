import React from "react";
import emoji1 from "../../assets/images/emoji1.jpeg";
import Data from "./cards_2_data";
const Card2 = () => {
  return (
    <div className="d-flex gap-3 image-sm-center mb-lg-5 mb-md-2 ">
      {Data?.map((item) => (
        <>
          <div className="card p-1" style={{width:'26rem'}}>
            <div className="d-flex align-items-center">
              <img src={item?.icon} alt="Card image cap" height={50} />
              <h5 className="card-title fs_14 ms-2">“{item?.title}”</h5>
              <h6 className="ms-auto fs_14">⭐⭐⭐⭐⭐</h6>
            </div>
            <div className="card-body">
              <p className="card-text fs_14 fw_400 text-secondary">
              {item?.desc}
              </p>
              <div className="d-flex justify-content-between mt-4">
                <p className="fs_14 fw_500">{item?.poet}</p>
                <p className="text-secondary fs_14 fw_400">{item?.designation}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card2;
