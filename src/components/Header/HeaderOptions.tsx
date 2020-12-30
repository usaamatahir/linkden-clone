import React, { FC } from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { HeaderOptionProps } from "../Types/Types";

const HeaderOptions: FC<HeaderOptionProps> = ({
  avatar,
  Icon,
  Title,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{Title}</h3>
    </div>
  );
};

export default HeaderOptions;
