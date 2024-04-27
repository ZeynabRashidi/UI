import React, { useState } from "react";
import Button from "../Button/Button";
import ButtonTypes from "../Button/ButtonTypes";
import Input from "../Input/Input";
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
        <span class="material-symbols-outlined header-item">
          emoji_food_beverage
        </span>

        <div className="header-item">آدرس انتخابی</div>
        <Input
          type="text"
          className="header-search-input"
          placeholder="جستجو در اسنپ فود"
          icon="material-symbols-outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="header-item"></div>
        <div className="header-item">ثبت نام فروشندگان</div>
        <Button
          label="ورود یا عضویت"
          type={ButtonTypes.PINK}
          icon="material-symbols-outlined"
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
