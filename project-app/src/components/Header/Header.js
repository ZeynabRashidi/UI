import React, { useState } from "react";
import Button from "../component/Button";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <header>
      <div className="container">
        <div className="header-item">
          <Button
            label="ورود یا عضویت"
            type="pink"
            icon="material-symbols-outlined"
            onClick={handleClick}
          />
        </div>
        <div className="header-item">ثبت نام فروشندگان</div>
        <input
          type="text"
          className="header-search-input"
          placeholder="جستجو در اسنپ فود"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="header-item">آدرس انتخابی</div>
        <span class="material-symbols-outlined header-item">
          emoji_food_beverage
        </span>
      </div>
    </header>
  );
};

export default Header;
