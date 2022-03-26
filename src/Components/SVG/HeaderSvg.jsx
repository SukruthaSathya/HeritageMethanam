import React from 'react'
import './HeaderSvg.css'

function HeaderSvg() {
    return (
        <div className='nav-svg'>
            <svg className='link-line' width="10px" height="1px" viewBox="0 0 10 10" > <line className='point'></line> </svg>
            <svg height="4px" width="4px" ><circle cx="2px" cy="2px" r="2px" /> </svg>
            <svg className='link-line' width="10px" height="1px" viewBox="0 0 10 10" ><line className='point'></line></svg>
        </div>
    )
}

export default HeaderSvg