import React from 'react'
import './../App.css';


function Header() {
  return (
    <div>
      <header>
        <ul class="navlist">
          <li><a href="#">Shop</a></li>
          <li><a href="#">On Sale</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="nav-right">
          <a href="#"><i class="ri-search-line"></i></a>
          <a href="#"><i class="ri-shopping-cart-line"></i></a>
          <a href="#"><i class="ri-user-line"></i></a>
          <div class="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>
    </div>
  )
}

export default Header