import React from "react";
import pfoto from "./img/Mask Group.svg";
const AboutProduct = () => {
  return (
    <>
      <div className="container">
        <div className="text-about">
          <p>about Products</p>
          <h2>About For Products</h2>
        </div>
      </div>
      <div className="bagraud">
        <div className="container">
          <div className="block-product">
            <div className="blocks-pfoto">
              <div className="radius">
                <img className="pfoto" src={pfoto} alt="" />
              </div>
            </div>
            <div className="text-info">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form, by
                injected <br />
                humour, or randomised words which don't look even slightly have
                <br />
                suffered believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                <br />
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
              <div className="checkbox-text">
                <input type="checkbox" />
                There are many variations of passages of Lorem Ipsum
              </div>
              <div className="checkbox-text">
                <input type="checkbox" />
                There are many variations of passages of Lorem <br />
                Embarrassing middle of text.
              </div>
              <div className="checkbox-text">
                <input type="checkbox" />
                There are many variations of passages of Lorem Ipsum
              </div>
              <div className="checkbox-text">
                <input type="checkbox" />
                There are many variations of passages.
              </div>
              <div className="checkbox-text">
                <input type="checkbox" />
                There are many variations of passages.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
