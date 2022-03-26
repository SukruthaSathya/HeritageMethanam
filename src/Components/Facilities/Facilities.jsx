import React from 'react'
import './Facilities.css'
import wifi from '../../Images/Facilities/wifi.png'
import pool from '../../Images/Facilities/pool.png'
import ac from '../../Images/Facilities/ac.png'
import briefcase from '../../Images/Facilities/briefcase.png'
import coffee from '../../Images/Facilities/coffee.png'
import carParking from '../../Images/Facilities/carParking.png'




function Facilities() {
const featureItems = [
    {
        id: '1',
        img: pool,
        text: "OUTDOOR POOL",
        color: 'blue'
    }, 
    {
        id: '2',
        img: wifi,
        text: "FREE WIFI",
        color: 'violet'
    },
    {
        id: '3',
        img: coffee,
        text: "FREE BREAKFAST",
        color: 'blue'
    },
    {
        id: '4',
        img: ac,
        text: "AIR-CONDITIONED",
        color: 'violet'
    },
    {
        id: '5',
        img: briefcase,
        text: "BUSINESS CENTRE",
        color: 'blue'
    },
    {
        id: '6',
        img: carParking,
        text: "FREE PARKING",
        color: 'violet'
    }
]

  return (
    <div className='facilities-container'>
        <div className="facilities-wrapper">
            <div className="facilities-content">
                <div>
                <h1>Heritage <br /> Methanam Facilities</h1>
                <p><span className='bigger'>The</span>  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                
                <div className='viewFacility'>
                    <hr />
                    <h4>VIEW ALL FACILITIES</h4>
                </div>
            </div>
            <div className="features">
            {featureItems.map((item)=>(
                        <div className={`feature ${item.color}`}>
                            <img src={item.img} alt="" />
                            <h4>{item.text}</h4>
                        </div>
            ))}
            </div>
                
                
            
        </div>
    </div>
  )
}

export default Facilities