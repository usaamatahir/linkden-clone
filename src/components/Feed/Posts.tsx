import { Avatar } from "@material-ui/core";
import React, { FC, forwardRef } from "react";
import InputOption from "./InputOption";
import "./Posts.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { postProps } from "../Types/Types";

const Posts: FC<postProps> = forwardRef(
  ({ name, description, photoUrl, message }, ref: any) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}>{name && name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="#808080"
          />
          <InputOption
            Icon={ChatOutlinedIcon}
            title="Comment"
            color="#808080"
          />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="#808080" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="#808080" />
        </div>
      </div>
    );
  }
);

export default Posts;
