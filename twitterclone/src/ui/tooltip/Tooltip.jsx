
import styles from './Tooltip.module.scss';
const Tooltip = (props) => {
  const { title, className } = props;
    console.log(props);

  return (
    <main className={`${className}//''`}>
      <span className={styles.tooltip}>{title}</span>
    </main>
  );
};
export default Tooltip;

