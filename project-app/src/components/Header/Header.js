import React, { useState } from "react";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <header>
      <div className="container">
        <div className="item">ورود یا عضویت</div>
        <div className="item">ثبت نام فروشندگان</div>
        <input
          type="text"
          className="search-input"
          placeholder="جستجو در اسنپ فود"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="item">آدرس انتخابی</div>
        <span class="material-symbols-outlined item">emoji_food_beverage</span>
      </div>
    </header>
  );
};

export default Header;
