import React from "react";
import vmal from "./img/417O3dKVmaL 1.svg";
import drons from "./img/Rectangle 92.svg"
import iphone from "./img/iphone-12-blue-select-2020 1.svg"
import ipad from "./img/ipad-pro-12-select-cell-silver-202003_GEO_GB_FMT_WHH 1.svg"
import jblue from "./img/Rectangle 44.svg"
import mackbookpro from "./img/Rectangle 93.svg"
import headphon from "./img/Rectangle 48.svg"
const NewShop = () => {
  return (
    <>
      <div className="container">
        <p className="shop">New shop</p>
        <h2 className="an">An enormous storehouse of facts</h2>
        <p className="lorem">
          The standard chunk of Lorem Ipsum used since the 1500s is <br />
          reproduced below for those interested.
        </p>
        <div>
          <div className="big-block-img">
            <div className="block-gap1">
              <div className="img1">
                <img src={vmal} alt="" />
              </div>
              <div className="img4">
                
                <img src={ipad} alt="" />
              </div>
            </div>
            <div className="block-gap2">
              <div className="img2">
                
                <img src={drons} alt="" />
              </div>
              <div className="img5">
                
                <img src={jblue} alt="" />
              </div>
              <div className="img7">
                <img src={mackbookpro} alt="" />
              </div>
            </div>
            <div className="block-gap3">
              <div className="img3">
                <img src={iphone} alt="" />
              </div>

              <div className="img6">
                
                <img src={headphon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewShop;
