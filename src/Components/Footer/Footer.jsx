import React from 'react'
import './Footer.css'
import logo from '../../Images/Header/logo.png'
import copyright from '../../Images/Footer/copyright.png'
import companyLogo from '../../Images/Footer/logo.png'

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
        <div className="footer-list">
            <div className='quick-links'>
                <h3>QUICK LINKS</h3>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US Us</li>
                    <li>FACILITIES</li>
                    <li>ACCOMODATION</li>
                    <li>DINING</li>
                    <li>MEETINGS & Events</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className='contacts'>
                <h3>CONTACTS</h3>
                <div className="contact-detail">
                <div>
                    <p id='address'>KUMBALANGI - PERUMBADAPPU ROAD, KUMBALANGI, KOCHI, KERALA 682007</p>
                </div>
                <div>
                    <p id='phone'>0484 224 8999</p>
                    <p id='email'>info@HeritageMethanam.com</p>
                </div>
                </div>
                
            </div>
            <div className="social-container">
                <div className='social-icon' id='fb'>
                    <i className='fa fa-facebook	'></i>
                </div>
                <div className='social-icon' id='tw'>
                    <i className='fa fa-twitter	'></i>
                </div>
                <div className='social-icon' id='ig'>
                    <i className='fa fa-instagram	'></i>
                </div>
                
                <div className='social-icon' id='pt'>
                    <i className='fa fa-linkedin	'></i>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <img src={copyright} alt="" />
            <div>Designed by:
                <img src={companyLogo} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Footer