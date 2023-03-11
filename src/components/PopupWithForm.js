import closebtn from '../images/close_icon.svg';

function PopupWithForm({title, name, children, isOpen, onClose, onCloseByClickOnOverlay, submitButtonText}) {
	return (
		 <section className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`} onMouseDown={onCloseByClickOnOverlay}>
		 <div className="popup__container">
			<h2 className="popup__title">{title}</h2>
			<form className="popup__form" name={`${name}`} noValidate>
			  {children}
			  <button className="popup__save-btn" type="submit">{submitButtonText}</button>
			</form>
			<button className="popup__close-btn" type="button" onClick={onClose}>
			<img className="popup__img-close-btn" src={closebtn} alt="Крестик" />
			</button>
		 </div>
	  </section>
	);
}

export default PopupWithForm;