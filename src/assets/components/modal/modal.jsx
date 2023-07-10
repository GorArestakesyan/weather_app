import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../../redux/slices/weatherSlice";
import "./modal.css";
const Modal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector(({ weather }) => weather);
  return (
    <>
      {modalOpen ? (
        <div className={modalOpen ? "modalContainer" : ""} id="modal">
          <div className="content">City not found</div>
          <div className="modalBtnContainer">
            <button
              className="modalBtn"
              onClick={() => dispatch(setModalOpen(false))}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
