import {
  RemoveScrollBar,
  noScrollbarsClassName
} from 'react-remove-scroll-bar';
import CloseIcon from '../ui/icons/CloseIcon';
import './ImageModal.css';
const ImageModal = (props) => {
  const { src } = props;

  return (
    <main className="imageModal">
      <RemoveScrollBar />
      <div className={noScrollbarsClassName} />
      <div onClick={() => props.setOpenModal(false)} className="close">
        <CloseIcon fill="white" />
      </div>
      <div className="content">
        <img src={src} />
      </div>
    </main>
  );
};
export default ImageModal;
