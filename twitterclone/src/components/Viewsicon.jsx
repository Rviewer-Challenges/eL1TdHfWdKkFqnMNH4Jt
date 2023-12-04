import { useState } from "react";
import ViewsIcon from "../ui/icons/ViewsIcon";
import styles from './Viewsicon.module.scss';
const Viewsicon = (props) => {
  const { views } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={isHovered ? `${
    styles.mainViewsIcon}` : ""}>
      <li
        onMouseEnter={() => setIsHovered((prevstate) => !prevstate)}
        onMouseLeave={() => setIsHovered((prevstate) => !prevstate)}
      >
        <div className={styles.mainViewsIcon__views}>
        <ViewsIcon
          fill={isHovered ? "SteelBlue" : "grey"}
          className={styles.cardContainer__headerIcon}
        />
        {views ? views : null}
        </div>
        <div className={styles.viewscontainer}>
          {isHovered}
        </div>
      </li>
    </main>
  );
};
export default Viewsicon;
