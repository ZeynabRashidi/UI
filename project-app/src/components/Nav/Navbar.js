import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <a href="/restaurant">
          <div className="category">
            <i class="material-symbols-outlined">restaurant</i>
            <span>رستوران</span>
          </div>
        </a>
        <a href="/shope">
          <div className="category">
            <i class="material-symbols-outlined-shop">shop</i>
            <span>سوپرمارکت</span>
          </div>
        </a>
        <a href="/coffee">
          <div className="category">
            <i class="material-icons">free_breakfast</i>
            <span>کافه</span>
          </div>
        </a>

        <a href="/cake">
          <div className="category">
            <i class="material-symbols-outlined-cake">cake</i>
            <span>شیرینی</span>
          </div>
        </a>
        <a href="/bakeryDining">
          <div className="category">
            <i class="material-symbols-outlined-bakeryDining">bakery_dining</i>
            <span>نانوایی</span>
          </div>
        </a>
        <a href="/fruit">
          <div className="category">
            <i class="material-symbols-outlined-fruit">nutrition</i>
            <span>میوه</span>
          </div>
        </a>
        <a href="/protein">
          <div className="category">
            <i class="material-symbols-outlined-protein">kebab_dining</i>
            <span>پروتئین</span>
          </div>
        </a>
        <a href="/icecream">
          <div className="category">
            <i class="material-symbols-outlined-icecream">icecream</i>
            <span>آب میوه بستنی</span>
          </div>
        </a>

        <a href="/other">
          <div className="category">
            <i class="material-symbols-outlined-other">more_horiz</i>
            <span>سایر</span>
          </div>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
