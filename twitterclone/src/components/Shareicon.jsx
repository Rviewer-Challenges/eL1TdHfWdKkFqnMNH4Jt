import { useState } from "react";
import ShareIcon from "../ui/icons/ShareIcon";
import Tooltip from "../ui/tooltip/Tooltip";
import styles from "./Shareicon.module.scss";

const Shareicon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={styles.sharecontainer}>
      <li
        onMouseEnter={() => setIsHovered((prevstate) => !prevstate)}
        onMouseLeave={() => setIsHovered((prevstate) => !prevstate)}
      >
        <div className={styles.container}>
          <ShareIcon
            className={styles.cardContainer__headerIcon}
            fill={isHovered ? "SteelBlue" : "grey"}
          />
        </div>
        <div className={styles.sharecontainer}>
          {isHovered && <Tooltip title="Share"/>}
        </div>
      </li>
    </main>
  );
};

export default Shareicon;
