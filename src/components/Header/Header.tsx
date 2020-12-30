import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import { auth } from "../Firebase/Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
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
          avatar={user?.photoUrl}
          Title={user?.displayName}
          onClick={logoutApp}
        />
      </div>
    </div>
  );
};

export default Header;
