import React from 'react'
import './Review.css'
import Client from './Client'

function Review() {
  return (
    <div className='review-container'>
            <div className="review-head">
                <h1>Our Happy Clients</h1>
                <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </div>
            <div className="clients">
                <Client/>
                <Client/>
                <Client/>
            </div>
    </div>
  )
}

export default Review