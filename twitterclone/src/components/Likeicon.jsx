import { useCallback, useEffect, useState } from 'react';
import HeartIcon from '../ui/icons/HeartIcon';
import Tooltip from '../ui/tooltip/Tooltip';
import styles from './LikeIcon.module.scss';

const Likeicon = (props) => {
  const { likes } = props;
  const [nlikes, setnLikes] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const addlikes = useCallback(() => {
    setnLikes((prevstate) => !prevstate);
  }, []);
  useEffect(() => {
    addlikes();
  }, [addlikes]);
  return (
    <main className={isHovered ? `${styles.mainLikeIcon}` : ''}>
      <section
        onClick={addlikes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.likeAnimate__like}>
          <HeartIcon
            className={styles.cardContainer__headerIcon}
            fill={isHovered ? 'red' : 'grey'}
          />
          {nlikes ? likes : likes + 1}
          <div className={styles.likecontainer}>
            {isHovered &&
              (nlikes ? <Tooltip title="Like" /> : <Tooltip title="Unlike" />)}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Likeicon;
