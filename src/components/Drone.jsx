import React from 'react';
import drone from "./img/pack anafi 1.svg"
import camera from "./img/463836_preview 1.svg"
const Drone = () => {
    return <>
    
            <div className="container">
                <div className="blockhdr">
                   <div className="block-drone">
                    <div className='info-drone'>
                        <p className='get'>Get up to 20% off Today Only!</p>
                        <h3>THE 4K HDR <br /> COMPACT DRONE</h3>
                        <p className='show'>Show Now</p>
                    </div>
                    <div>
                        <img className='imgdrone' src={drone} alt="" />
                    </div>
                    
                   </div>
                   <div className="block-drone">
                    <div className='info-drone'>
                        <p className='get'>Get up to 30% off Today Only!</p>
                        <h3>THE 4K HDR <br /> COMPACT DRONE</h3>
                        <p className='show'>Show Now</p>
                    </div>
                    <div>
                        <img className='imgdrone' src={camera} alt="" />
                    </div>
                    
                   </div>
                </div>



            </div>












        </>
    
};

export default Drone;