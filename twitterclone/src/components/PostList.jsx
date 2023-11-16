import { useEffect, useState } from "react";
import user from "../data/user.json";
import { useTweets } from "../hooks";
import { PostCard } from "./PostCard";
import styles from "./PostList.module.scss";
export const PostList = (props) => {
  const refetch = props;
    const [openModal, setOpenModal] = useState(false);

  const { loading, data, getTweets } = useTweets();
  useEffect(() => {
    getTweets();
  }, [refetch]);
  const { username, name, avatar } = user;
  if (loading) return <h1>Loading...</h1>;

  return (
    <main className={styles.main}>
      {data &&
        data?.map(
          ({
            id,
            likes,
            comments,
            retweets,
            content,
            views,
            images,
          }) => (
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

