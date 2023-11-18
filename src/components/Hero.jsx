import React from "react";
import radio from "./img/81Z-7PzoB9L 1.png";
import logo from "./img/cl_logo2.svg"
import logoo from "./img/cl_logo4.svg"
import logooo from "./img/cl_logo5.svg"
import logoooo from "./img/cl_logo7.svg"
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero-block">
          <div className="infotext">
            <p className="fav">Favorite brands</p>
            <h1 className="for">
              <span className="span">
                An exciting place <br />
              </span>
              for the whole family to shop.
            </h1>
            <p className="the">
              The standard chunk of Lorem Ipsum used since the 1500s is <br />
              reproduced below for those interested.
            </p>
            <div className="btn-b">
              <button className="btn">Shop Now</button>
              <p className="price">
                $ 249.99 <span>$ 249.99</span>
              </p>
            </div>
          </div>
          <div>
            <img
              src={radio}
              alt="img"
              style={{ width: " 500px", height: "500px" }}
            />
          </div>
        </div>
        <div className="logos">

        <div className="logo">
            <div className="log">
                <img src={logoo} alt="img" />
            </div>
            <div className="log">
                <img src={logooo} alt="img" />
            </div>
            <div className="log">
                <img src={logoooo} alt="img" />
            </div>
            <div className="log">
                <img src={logo} alt="img" />
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
