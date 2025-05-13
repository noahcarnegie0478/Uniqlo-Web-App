import React, { useState } from "react";
import Modal from "react-modal";

function ImageDisplay({ chosenItem, currentColor }) {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "2px",
      transform: "translate(-50%, -50%)",
      borderRadius: "1px",
    },
  };

  const [currentImage, setCurrentImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = image => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`image-detail w-full grid h-auto bg-gray-300 grid-rows-${Math.round(
        chosenItem?.image_paths?.length / 2
      )} gap-0 grid-cols-2`}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div>
          <img src={currentImage} alt="image-items" className="h-200 " />
        </div>
      </Modal>
      <div className="itemImage col-start-1 ">
        <img
          src={currentColor.ItemImage}
          alt="image-items"
          className="w-full "
          onClick={() => openModal(currentColor.ItemImage)}
        />
      </div>{" "}
      {chosenItem.image_paths.map(img => (
        <div className="itemImage " key={`${img}`}>
          <img
            src={img}
            alt="image-items"
            className="w-full "
            onClick={() => openModal(img)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageDisplay;
