import ImageModal from "./ImageModal";
import "./ImagesCard.scss";
const ImagesCard = (props) => {
  const { image, setOpenModal, openModal } = props;
  return (
    <main className="single-image">
      <img
        src={image.url}
        alt={image.name}
        onClick={() => setOpenModal((prevState) => !prevState)}
      />
      <div className={openModal ? "openModal" : "closeModal"}>
        {openModal && (
          <ImageModal
            src={image.url}
            alt={image.name}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </main>
  );
};
export default ImagesCard;
