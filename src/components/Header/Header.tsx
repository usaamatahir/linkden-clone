import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  return (
    <div className="header">
      {/* Left Header */}

      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* Right Header */}

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} Title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} Title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} Title="Jobs" />
        <HeaderOptions Icon={ChatIcon} Title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} Title="Notifications" />
        <HeaderOptions
          avatar="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/126332725_211358687161666_4697850064909604332_o.jpg?_nc_cat=111&ccb=2&_nc_sid=a4a2d7&_nc_ohc=S3OybW5qYZ8AX9MHHLd&_nc_ht=scontent.fkhi2-1.fna&oh=15b3524cd652e2a0caf50fb9e581e659&oe=6009C61F"
          Title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
