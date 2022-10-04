import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello world</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello world</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello world</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
