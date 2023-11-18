import React from 'react';
import header from "./img/Group 165.png"
import {IoIosSearch } from "react-icons/io"
import {LuShoppingCart } from "react-icons/lu"
import {CgProfile } from "react-icons/cg"
const Header = () => {
    return <>
             <div className='container'>
                <div className='block'>
                <div className='imges'>
                    <img src={header} alt="img" />
                </div>
                <div className='nav-block'>
                    <select>
                        <option className='nav' value="home">
                        Home
                        </option>
                   </select>
                    <select>
                        <option className='nav' value="home">
                        About
                        </option>
                    </select>
                    <select>
                        <option className='nav' value="home">
                        Product
                        </option>
                    </select>
                    <select>
                        <option className='nav' value="home">
                        blog
                        </option>
                    </select>
                    <select>
                        <option className='nav' value="home">
                        shop
                        </option>
                    </select>
                    <a className='nav' href="/">Contact us</a>
                    <div className='blockIcons'>

                    <div className='icons'>
                    <IoIosSearch />

                    </div>
                    <div><LuShoppingCart /></div>
                    <div><CgProfile /></div>
                    </div>
                </div>

                </div>
                </div> 



        </>
    
};

export default Header;