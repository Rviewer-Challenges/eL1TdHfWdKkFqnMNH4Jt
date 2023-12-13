import { useState } from 'react';
import MoreIcon from '../ui/icons/MoreIcon';
import styles from './MoreIcon.module.scss';
const Moreicon = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <li
        onMouseEnter={() => setIsHovered((prevstate) => !prevstate)}
        onMouseLeave={() => setIsHovered((prevstate) => !prevstate)}
      >
        <MoreIcon
          className={`${styles.cardContainer__headerIcon} ${styles.moreicon}`}
          fill={isHovered ? 'SteelBlue' : 'grey'}
        />
        <div className={styles.morecontainer}>{isHovered}</div>
      </li>
    </div>
  );
};

export default Moreicon;
