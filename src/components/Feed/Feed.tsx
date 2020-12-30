import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Posts from "./Posts";
import { db } from "../Firebase/Firebase";
import firebase from "firebase";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState<any>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user?.displayName,
      description: user?.email,
      message: input,
      photoUrl: user?.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Wrie article"
            color="#7fc15e"
          />
        </div>
      </div>
      {console.log("POST : ", posts)}
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { photoUrl, message, name, timestamp, description },
          }: any) => (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
