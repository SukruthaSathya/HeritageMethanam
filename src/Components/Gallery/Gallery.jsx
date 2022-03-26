import React from 'react'
import './Gallery.css'
import middle from '../../Images/Gallery/middle.png'
import zoom from '../../Images/Gallery/zoom.png'
import gallery1 from '../../Images/Gallery/gallery1.png'
import gallery2 from '../../Images/Gallery/gallery2.png'
import gallery3 from '../../Images/Gallery/gallery3.png'
import gallery4 from '../../Images/Gallery/gallery4.png'
import gallery5 from '../../Images/Gallery/gallery5.png'
import gallery6 from '../../Images/Gallery/gallery6.png'
import gallery7 from '../../Images/Gallery/gallery7.png'
import gallery from '../../Images/Gallery/gallery.png'


function Gallery() {
  return (
    <div className='gallery-container'>
        <div className="gallery-heading">
            <h1>Our Photo Gallery</h1>
            <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        </div>
        <div className="collections">
            <div className='collection-section'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>
            <div className="collection-section" id='middle'>
            <img src={middle} alt="" />
                <div className='collection-search'>
                    <img src={zoom} alt="" />
                </div>
            </div>
            <div className='collection-section'>
            <img src={gallery5} alt="" />
            <img src={gallery6} alt="" />
            <img src={gallery7} alt="" />
            <div className='view'>
            <img  src={gallery} alt="" />
            <h4>VIEW ALL <br /> <span>GALLERY</span></h4>
            </div>
            

            </div>
        </div>
    </div>
  )
}

export default Gallery