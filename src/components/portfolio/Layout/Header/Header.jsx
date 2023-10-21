import React from 'react'
import "./Header.scss"
import assets from "../../../../Images/Portfolio/Header/index"

function Header() {
  return (
    <div className='portfolio_header d-flex flex-row justify-content-between container-fluid p-4 align-items-center' >
<div className='right_section'>
<h1>Builders We’ve Backed</h1>
</div>
<div className="left_section d-flex flex-row justify-content-between gap-3">
<img src={assets.search} alt="search" />
<img src={assets.threeLine} alt="threeLine" />
</div>
    </div>
  )
}

export default Header