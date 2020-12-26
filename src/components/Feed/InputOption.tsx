import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React, { FC } from "react";
import "./InputOption.css";

type inputOptionProps = {
  Icon?: any;
  title?: string;
  color?: string;
};
const InputOption: FC<inputOptionProps> = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
