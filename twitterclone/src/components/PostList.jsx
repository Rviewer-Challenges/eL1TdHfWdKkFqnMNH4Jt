import { useEffect, useState } from "react";
import user from "../data/user.json";
import { useTweets } from "../hooks";
import { PostCard } from "./PostCard";
export const PostList = (props) => {
  const refetch = props;
  const [openModal, setOpenModal] = useState(false);
  const { loading, data, getTweets } = useTweets();

  useEffect(() => {
    getTweets();
  }, [refetch]);
  const { username, twitteruser: name, urlavatar: avatar } = user;
  if (loading) return <h1>Loading...</h1>;

  if (!data) return <h1>No data</h1>;
  return (
    <main className="min-h-screen  max-w-[600px] w-full text-sm ">
      {data &&
        data?.map(
          ({ id, likes, comments, retweets, content, views, images }) => (
            <>
              <PostCard
                key={id}
                id={id}
                likes={likes}
                comments={comments}
                retweets={retweets}
                avatar={avatar}
                username={username}
                name={name}
                content={content}
                views={views}
                images={images}
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            </>
          )
        )}
    </main>
  );
};