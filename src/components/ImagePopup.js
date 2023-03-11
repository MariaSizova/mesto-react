function ImagePopup({ card, onClose, onCloseByClickOnOverlay }) {
  return (
    <section
      className={`popup popup_type_image ${
        Object.keys(card).length !== 0 ? "popup_is-opened" : ""
      }`}
      onMouseDown={onCloseByClickOnOverlay}
    >
      <div className="popup__container popup__container_image">
        <img className="popup__image" src={card.link} alt={card.name} />
        <h2 className="popup__image-title">{card.name}</h2>
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
