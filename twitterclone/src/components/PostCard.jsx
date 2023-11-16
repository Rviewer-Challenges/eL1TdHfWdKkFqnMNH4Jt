/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Likeicon from "./LikeIcon";
import Moreicon from "./MoreIcon";
import styles from "./PostCard.module.scss";
import Replyicon from "./Replyicon";
import Reposticon from "./Reposticon";
import Shareicon from "./Shareicon";
import Viewsicon from "./Viewsicon";
import ImagesCard from "./imagesCard";

export const PostCard = ({
  id,
  name,
  username,
  content,
  retweets,
  comments,
  avatar,
  tweets,
  likes,
  views,
  images,
  setOpenModal,
  openModal,
}) => {
  useEffect(() => {}, [tweets]);
  return (
    <main className={styles.cardContainer}>
      <div>
        <figure className={styles.cardContainer__profile}>
          <img src={avatar} alt={`Profile Photo ${name}`} />
        </figure>
      </div>
      <div className={styles.card}>
        <ul key={id}>
          <header className={styles.cardContainer__header}>
            <div className={styles.cardContainer__headerInfo}>
              <li>{name}</li>
              <li>{username}</li>
            </div>
            <div>{openModal === false ? <Moreicon /> : null}</div>
          </header>
          <section className={styles.cardContainer__contentimage}>
            <div className={styles.cardContainer__content}>
              <li className={styles.cardContainer__contentText}>{content}</li>
            </div>
            {images &&
              images?.map((image, index) => {
                return (
                  <>
                    <figure key={index} className={styles.cardContainer__image}>
                      <ImagesCard
                        image={image}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                      />
                    </figure>
                  </>
                );
              })}
            {openModal === false ? (
              <footer className={styles.cardContainer__footer}>
                <section className={styles.iconsweight}>
                  <div className={styles.iconsweight__items}>
                    <Replyicon retweets={retweets} />
                  </div>
                  <div className={styles.iconsweight__items}>
                    <Reposticon comments={comments} />
                  </div>
                  <div className={styles.iconsweight__items}>
                    <Likeicon likes={likes} />
                  </div>
                  <div className={styles.iconsweight__items}>
                    <Viewsicon views={views} />
                  </div>
                  <div className={styles.iconsweight__items}>
                    <Shareicon />
                  </div>
                </section>
              </footer>
            ) : null}{" "}
          </section>
        </ul>
      </div>
    </main>
  );
};
