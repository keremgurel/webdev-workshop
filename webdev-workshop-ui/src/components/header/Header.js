import React from 'react'
import './Header.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import logo from "../src/Images/fanjoy.png";

function Header() {
    return (
    <div className="header">
      <div className="header__dehaze">
        <DehazeIcon className="header__dehazeIcon" />
        {/* Logo */}
      </div>

      <div>
      <img className="header__logo" src={logo} alt="" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine">CAD$</span>
        </div>

        <div className="header__option">
          <PersonOutlineOutlinedIcon />
        </div>

        <div className="header__option">
          <SearchIcon />
        </div>

          <div className="header__optionBasket">
            <LocalMallOutlinedIcon />
            {/* <span className="header_optionLine header__basketCount">0</span> */}
          </div>
      </div>
    </div>
  );
}

export default Header;
