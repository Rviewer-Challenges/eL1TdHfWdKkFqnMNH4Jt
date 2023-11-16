import { useState } from "react";
import RePostIcon from "../ui/icons/RePostIcon";
import Tooltip from "../ui/tooltip/Tooltip";
import styles from "./Reposticon.module.scss";
const Reposticon = (props) => {
  const { comments } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={isHovered ? `${styles.mainRepostIcon}` : ""}>
      <li
        onMouseEnter={() => setIsHovered((prevstate) => !prevstate)}
        onMouseLeave={() => setIsHovered((prevstate) => !prevstate)}
      >
        <div className={styles.mainRepostIcon__repost}>
          <RePostIcon
            fill={isHovered ? "MediumSeaGreen" : "grey"}
            className={styles.cardContainer__headerIcon}
          />
          {comments}
        </div>
        <div className={styles.repostcontainer}>
          {isHovered && <Tooltip title="Repost" />}
        </div>
      </li>
    </main>
  );
};
export default Reposticon;
