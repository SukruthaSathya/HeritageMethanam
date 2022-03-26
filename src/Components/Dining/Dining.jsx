import React from 'react'
import './Dining.css'
import dish from '../../Images/Dining/dish.png'
import restaurant from '../../Images/Dining/restaurant.png'

function Dining() {
    return (
        <div className="dining-container">
            <div className="dining-head">
                <h1>Heritage Methanam Dining</h1>
                <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            </div>
            <div className="dining-content">
                <div className='dining-item' id="restaurant">
                    <img src={restaurant} alt="" />
                    <div className="item-desc">
                        
                            <h1>Restaurants</h1>
                            <p><span className='bigger'>The</span>  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        

                        <div className='viewFacility'>
                            <hr />
                            <h4>READ MORE</h4>
                        </div>
                    </div>
                </div>
                <div className='dining-item' id="menu">
                    <img src={dish} alt="" />
                    <div className="item-desc">
                    
                            <h1>Our Menu</h1>
                            <p><span className='bigger'>The</span>  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        

                        <div className='viewFacility'>
                            <hr />
                            <h4>READ MORE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dining