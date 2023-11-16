import moment from "moment";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import user from "../data/user.json";
import EmojiIcon from "../ui/icons/EmojiIcon";
import GifIcon from "../ui/icons/GifIcon";
import MediaIcon from "../ui/icons/MediaIcon";
import PathIcon from "../ui/icons/PathIcon";
import PollIcon from "../ui/icons/PollIcon";
import ScheduleIcon from "../ui/icons/ScheduleIcon";
export const PostForm = (props) => {
  const { onRefetch } = props;
  const [text, setText] = useState("");
  const unique_id = uuid();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (text.length > 0) {
      fetch("http://localhost:3000/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: unique_id,
          date: moment().format("MMMM Do YYYY, h:mm:ss a"),
          content: text,
          likes: Math.ceil(Math.random() * 31),
          retweeks: Math.ceil(Math.random() * 31),
          comments: Math.ceil(Math.random() * 31),
        }),
      });
      setText("");
      onRefetch();
    }
  };
  const handlePostChange = (ev) => {
    setText(ev.target.value);
  };
  const { avatar: profilePhoto } = user;
  return (
    <main >
      <figure>
          <img
        src={profilePhoto}
        alt="ProfilePhoto"
        height={40}
        width={40}
      />
      </figure>
    
      <div>
        <form onSubmit={handleSubmit} >
          <div
            name="textarea"
            rows="5"
            cols="60"
            onChange={handlePostChange}
            value={text}
            placeholder="what its happening?!"
            contentEditable
          />
          <div >
            <div >
              <MediaIcon />
              <GifIcon />
              <PollIcon />
              <EmojiIcon />
              <ScheduleIcon />
              <PathIcon />
            </div>
            <button >
              Post
            </button>
          </div>
        </form>
      </div>
      {text}
    </main>
  );
};


