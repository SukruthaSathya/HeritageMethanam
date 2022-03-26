import React from 'react'
import './Header.css'
import logo from '../../Images/Header/logo.png';
import HeaderSvg from '../SVG/HeaderSvg';



function Header() {
    return (
        <div className='header-container'>
            <div className='contact-log'>
                <ul>
                    <li id='call-now'>
                        <i className='material-icons'>phone_in_talk	</i>
                        <p>CALL NOW</p>
                    </li>
                    <li id='sent-mail'>
                        <i className='material-icons'>mail_outline</i>
                        <p>SENT MAIL</p>
                    </li>
                    <li id='whatsapp'>
                        <i className='fa fa-whatsapp	'>	</i>
                        <p>WHATSAPP</p>
                    </li>
                </ul>
            </div>

            <div className='header-wrapper'>

                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='navbar'>
                    <div className='nav-item'>
                        <a href="">
                            <p>HOME</p>
                            <HeaderSvg />
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>ABOUT US</p>
                            <HeaderSvg />
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>FACILITIES</p>
                            <HeaderSvg />
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>ACCOMODATION</p>
                            <HeaderSvg />
                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>DINING</p>
                            <HeaderSvg />

                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>MEETINGS & EVENTS</p>
                            <HeaderSvg />

                        </a>
                    </div>
                    <div className='nav-item'>
                        <a href="">
                            <p>CONTACT US</p>
                            <HeaderSvg />
                        </a>
                    </div>
                    <button>RESERVATION</button>
                </div>
            </div>
        </div>
    )
}

export default Header