import { Avatar } from "@material-ui/core";
import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar__top">
        <img src="" alt="" />

        <Avatar className="sidebar__avatar" />
        <h2>Usama Tahir</h2>
        <h4>usamatahir8330@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat"></div>
      </div>
    </div>
  );
};

export default SideBar;
