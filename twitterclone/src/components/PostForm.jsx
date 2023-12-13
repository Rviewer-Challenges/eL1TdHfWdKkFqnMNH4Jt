import moment from "moment/moment";
import { useState } from "react";
import user from "../data/user.json";
import { useTweets } from "../hooks";
import EmojiIcon from "../ui/icons/EmojiIcon";
import GifIcon from "../ui/icons/GifIcon";
import MediaIcon from "../ui/icons/MediaIcon";
// eslint-disable-next-line no-unused-vars
import PathIcon from "../ui/icons/PathIcon";
import PollIcon from "../ui/icons/PollIcon";
import ScheduleIcon from "../ui/icons/ScheduleIcon";
import { generateRamdomData } from "../utils/utils";
export const PostForm = (props) => {
  const { onRefetch } = props;
  const [text, setText] = useState("");
  const {createTweet} = useTweets();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (text=="") return
    if (text.length > 0) {
      createTweet({
        id: Date.now(),
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        content: text,
        likes: generateRamdomData(),
        retweets: generateRamdomData(),
        comments: generateRamdomData(),
      });
      setText("");
      onRefetch();
    }
  };

  const handlePostChange = (ev) => {
    setText(ev.target.value);
  };

  const { urlavatar: profilePhoto } = user;
  return (
    <main className=" pt-2    justify-around hidden md:flex">
      <figure>
        <img
          src={profilePhoto}
          alt="ProfilePhoto"
          className="rounded-full"
          height={40}
          width={40}
        />
      </figure>
      <section>
        <form onSubmit={handleSubmit}>
          <textarea
            name="textarea"
            rows="5"
            cols="60"
            onChange={handlePostChange}
            value={text}
            placeholder="What its happening?!"

            className="w-[30rem] min-h-[7.5rem] break-all "
          />
          <div className="flex justify-between  h-14">
            <div className="hidden md:flex h-25 w-32 ">
              <MediaIcon fill="#31a4f1" />
              <GifIcon fill="#31a4f1" />
              <PollIcon fill="#31a4f1" />
              <EmojiIcon fill="#31a4f1" />
              <ScheduleIcon fill="#31a4f1" />
              <PathIcon fill="rgb(49, 164, 241)" />
            </div>
            <div className="self-center">
              <button
                type="submit"
                className="w-[3.5rem] h-[2rem]  bg-[#004daa]  text-white rounded-l-lg  rounded-r-lg  text-sm   "
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
