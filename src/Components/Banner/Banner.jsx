import React, { useState } from 'react'
import './Banner.css'
import banner1 from '../../Images/Banner/Banner1.png'
import banner2 from '../../Images/Banner/Banner2.png'
import banner3 from '../../Images/Banner/Banner3.png'
import playButton from '../../Images/Banner/play-button.png'
import mouse from '../../Images/Banner/mouse.png'
import styled from 'styled-components'


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.bannerIndex*-100}vw);`

function Banner() {

  const bannerItems = [
    {
      id: "banner1",
      img: banner1
    },
    {
      id: "banner2",
      img: banner2
    },
    {
      id: "banner3",
      img: banner3
    }
  ]
  const [bannerIndex, setBannerIndex] = useState(0)
  const handleBanner = () =>{
    setBannerIndex(bannerIndex < 2 ? bannerIndex+1 : 0)
  }
  return (
    <div className='banner-container'>
      {bannerItems.map((item) => (
        <Wrapper bannerIndex={bannerIndex}>

          <div className="banner" id={item.id}>
           <div className="ImgContainer">
              <img src={item.img} alt="" />
            </div>
          </div>
          </Wrapper>
      ))}
      <div className="banner-content">
        <div>
          <div className="play-button" onClick={handleBanner}>
            <img src={playButton} alt="" />
          </div>
          <h4>WELCOME TO HERITAGE METHANAM</h4>
          <h1>Summer Vacation in Kerala</h1>
        </div>
        <div>
          <p>SCROLL DOWN</p>
          <img src={mouse} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Banner