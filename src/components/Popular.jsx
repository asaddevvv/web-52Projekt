import React from 'react';
import speaker from "./img/Rectangle 85.svg"
import bass from "./img/Rectangle 86.svg"
import board from "./img/51lpfDERgyL 1.svg"
import mackbook from "./img/Rectangle 90.svg"
import headphone from "./img/Rectangle 89.svg"
import spiner from "./img/Rectangle 88.svg"
import {LiaLongArrowAltRightSolid  } from "react-icons/lia"
const Popular = () => {
    return  <>
            <div className="container">
                <p className='new'>New Products</p>
                <h2 className='pop'>Popular Products</h2>
                  <div className='text-a'>
                    <a href="/">Recent arrival</a>
                    <a href="/">best sellers</a>
                    <a href="/">special offers</a>
                    <a href="/">featured in</a>


                  </div>
                  <div className="big-blocks">

                  <div className='block-get'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={speaker} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  {/* 2=============================== */}
                  <div className='block-get'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={bass} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  {/* =============================== */}
                  <div className='block-gett'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={board} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  <div className='block-get'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={mackbook} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  <div className='block-get'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={headphone} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  <div className='block-get'>
                 <p className='up'>Get up to 20% off Today Only!</p>
                          <img src={spiner} alt="" />
                   <h5>Black iPhone Speaker</h5>
                  <p className='bay'>$ 249.99 <span>/$ 249.99</span></p>
                    <div className='sss'>
                    <div class="full-stars1">
    <div class="rating-group1">
        {/* <!-- по умолчанию 0 --> */}
        <input name="fstt" value="0" type="radio" disabled checked />
        
        {/* <!-- рейтинг 1 -->     */}
        <label for="fstt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-1" value="1" type="radio" />
        
        {/* <!-- рейтинг 2 -->     */}
        <label for="fstt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-2" value="2" type="radio" />
        
        {/* <!-- рейтинг 3 -->     */}
        <label for="fstt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-3" value="3" type="radio" />
        
        {/* <!-- рейтинг 4 -->         */}
        <label for="fstt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-4" value="4" type="radio" />
        
        {/* <!-- рейтинг 5 -->     */}
        <label for="fstt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
        </label>
        <input name="fstt" id="fstt-5" value="5" type="radio" />
    </div>
</div>
                    </div>



                  </div>
                  </div>
                  <div className='vi'>view all <LiaLongArrowAltRightSolid /></div>
            </div>
        </>
    
};

export default Popular;