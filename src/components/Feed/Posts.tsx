import React, { FC } from "react";
import "./Posts.css";

type postProps = {
  name: string;
  description: string;
  photoUrl: string;
  message: string;
};
const Posts: FC<postProps> = ({ name, description, photoUrl, message }) => {
  return <div className="post"></div>;
};

export default Posts;
