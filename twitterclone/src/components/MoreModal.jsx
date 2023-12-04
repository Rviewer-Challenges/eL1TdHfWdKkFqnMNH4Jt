import { DeleteIcon } from "../ui/icons/DeleteIcon";
import DeletepostModal from "./DeletepostModal";

import useStore from "../store/modal";

const MoreModal = (props) => {
  const openmodal = useStore((state) => state.open);
  
  const { id } = props;
  return (
    <main>
      <section className="bg-black  rounded-lg  h-80 w-full absolute bottom-0 right-0 z-50  flex flex-col justify-start items-start">
        <div className="text-red-600  flex ml-3 mt-3 " onClick={openmodal}>
          <DeleteIcon fill="red" />
          <span className="ml-3 font-bold" id={id} onClick={openmodal}>
            Delete
          </span>
          <span >
            <DeletepostModal />
          </span>
        </div>
      </section>
    </main>
  );
};

export default MoreModal;
