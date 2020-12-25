import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React, { FC } from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

type HeaderOptionProps = {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  Title?: string;
  avatar?: string;
};
const HeaderOptions: FC<HeaderOptionProps> = ({ avatar, Icon, Title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{Title}</h3>
    </div>
  );
};

export default HeaderOptions;
