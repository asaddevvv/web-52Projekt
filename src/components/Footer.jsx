import React from 'react';
import linkedd from "./img/Group 165.svg"
const Footer = () => {
    return <>
            <div className="footer-block">
                <div className="footers-text">
                    <h6>User Contact</h6>
                    <h4>Contact Us for those interested.</h4>
                    <p>The standard chunk of Lorem Ipsum used since the is <br />
                     reproduced below for those interested.</p>
                </div>
                <div className='adres'>
                    <input type="email" placeholder='Enter your email address' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="footers-blocks">
                <div className="footer-icons">
                    <img src={linkedd} alt="" />
                    <p>STORE - worldwide fashion store since 1978. <br />
                     We sell over 1000+ branded products on <br />
                      our web-site.</p>
                </div>
                <div className="footers-info">
                    <h5>INFORMATION</h5>
                    <a href="/">New Collection</a>
                    <a href="/">About Store</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Latest News</a>
                    <a href="/">Our Sitemap</a>
                    <a href="/">Orders History</a>
                </div>
                <div className="footers-menu">
                    <h5>FOOTER MENU</h5>
                    <a href="/">Instagram profile</a>
                    <a href="/">New Collection</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Latest News</a>
                    <a href="/">Our Sitemap</a>
                    <a href="/">Orders History</a>
                </div>
                <div className="footers-links">
                    <h5>USEFUL LINKS</h5>
                    <a href="/">Instagram profile</a>
                    <a href="/">New Collection</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Latest News</a>
                    <a href="/">Our Sitemap</a>
                    <a href="/">Orders History</a>
                </div>
                <div className='footer-about'>
                    <h5>ABOUT THE STORE</h5>
                <p>STORE - worldwide fashion store since 1978. <br />
                 We sell over 1000+ branded products on <br />
                  our web-site.</p>
                  <a href="/">www.company.com</a>
                  <div>

                  </div>
                </div>
            </div>
        </>
    
};

export default Footer;