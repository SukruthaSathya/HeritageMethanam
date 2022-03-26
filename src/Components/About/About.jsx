import React from 'react'
import './About.css'
import aboutImage from "../../Images/About/aboutImage.png"
import imageSideSection from "../../Images/About/imageSideSection.png"
import imgRectangle from "../../Images/About/imgRectangle.png"


function About() {
  return (
    <div className='about-container'>
      <div className='about-heading'>
        <h4>WELCOME TO</h4>
        <p>Something that is rare beautiful, timeless and crafted on a <br />
          commitment to excellence, innovation, passion and respect.</p>
      </div>
      <div className="about-content">
        <div className="content-heading">
          <div>
            <h1>21</h1>
            <h2>Years of <br /> Experience in <br /> Kerala</h2>
          </div>
          <div className='bottom'>
            <h4>HERITAGE METHANAM</h4>
            <hr />
          </div>

        </div>
        <div className='content-desc'>
          <p> <span className='bigger'><b> The</b> </span>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s </p>
          <h4>READ MORE</h4>
        </div>
        <div className="content-img">
          <img className='aboutImage' src={aboutImage} alt="" />
          <img className='sideSection' src={imageSideSection} alt="" />
        </div>
      </div>
      <div className='rectangle'>
        <img  src={imgRectangle} alt="" />
        
      </div>

    </div>
  )
}

export default About