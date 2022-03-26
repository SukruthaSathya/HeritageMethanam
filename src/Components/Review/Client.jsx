import React from 'react'
import './Review.css'
import profile from '../../Images/Review/profile.png'


function Client() {
  return (
    <div className="client">
                    <div className="rating">
                        <i className='fa fa-star-o	'></i>
                        <i className='fa fa-star-o	'></i>
                        <i className='fa fa-star-o	'></i>
                        <i className='fa fa-star-o	'></i>
                        <i className='fa fa-star-o last	'></i>
                    </div>
                    <div className="client-review">
                        <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                             but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="client-details">
                        <img src={profile} alt="" />
                        <div className='clientInfo'>
                        <p><b> JOHN MILLS</b></p>
                            <p>Architect England</p>
                        </div>
                    </div>
                </div>
  )
}

export default Client