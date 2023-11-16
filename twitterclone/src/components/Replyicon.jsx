import { useState } from "react";
import ReplyIcon from "../ui/icons/ReplyIcon";
import Tooltip from "../ui/tooltip/Tooltip";
import styles from "./Replyicon.module.scss";

const Replyicon = (props) => {
  const { retweets } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main
      className={isHovered ? `${styles.mainReplyIcon}` : `${styles.mainReply}`}
    >
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.mainReplyIcon__retweetsicons}>
          <ReplyIcon
            className={styles.cardContainer__headerIcon}
            fill={isHovered ? 'SteelBlue' : 'grey'}
          />
          <span>{retweets && retweets}</span>
        </div>
        <div className={styles.replycontainer}>
          {isHovered && <Tooltip title="Reply"   className='replytooltip'/>}
        </div>
      </li>
    </main>
  );
};
export default Replyicon;
