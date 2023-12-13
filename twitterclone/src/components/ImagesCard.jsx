import ImageModal from "./ImageModal";
const ImagesCard = (props) => {
  const { image, setOpenModal, openModal } = props;

  return (
    <main >
      <img
        src={image}
        onClick={() => setOpenModal((prevState) => !prevState)}
        className=" w-80"
      />
      <div>
        {openModal && (
          <ImageModal
            src={image}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </main>
  );
};
export default ImagesCard;
