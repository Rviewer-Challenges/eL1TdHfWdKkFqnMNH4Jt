/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Likeicon from './LikeIcon';
import Moreicon from './MoreIcon';
import Replyicon from './Replyicon';
import Reposticon from './Reposticon';
import Shareicon from './Shareicon';
import Viewsicon from './Viewsicon';
import ImagesCard from './imagesCard';

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
  openModal
}) => {
  useEffect(() => {}, [tweets]);

  return (
    <main className="flex  pt-3   border-full border-b-2 border-color-bordercolor ">
      <figure key={id}>
        <img
          src={avatar}
          alt={`Profile Photo ${name}`}
          className="rounded-full ml-4"
          height={40}
          width={40}
        />
      </figure>
      <section className="flex justify-center  ml-5  md:w-[30rem] ">
        <>  <ul key={id}>
          <header className="flex flex-row ">
            <div className="flex">
              <li>{username}</li>
              <li className="ml-3">{name}</li>
            </div>
            <div>{openModal === false ? <Moreicon id={id} /> : null}</div>
          </header>
          <section>
            <div className="pb-6 max-w-[26rem]">{content}</div>
            {images &&
              images?.map((name) => {
                return (
                  <>
                    <figure
                      key={id}
                      className="flex bg-emerald-500 flex-row w-4"
                    >
                      <ImagesCard
                        image={name}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
  />
                    </figure>
                  </>
                );
              })}
            {openModal === false
              ? (
              <footer className="flex justify-between  w-[18rem]   md:w-[26rem]  md:pb-5   min-h-min">
                <div className="flex-1">
                  <Replyicon retweets={retweets} />
                </div>
                <div className="flex-1">
                  {' '}
                  <Reposticon comments={comments} />
                </div>
                <div className="flex-1">
                  {' '}
                  <Likeicon likes={likes} />
                </div>
                <div className="flex-1">
                  {' '}
                  <Viewsicon views={views} />
                </div>
                <div>
                  {' '}
                  <Shareicon />
                </div>
              </footer>
                )
              : null}
          </section>
        </ul>
        </>

      </section>
    </main>
  );
};
