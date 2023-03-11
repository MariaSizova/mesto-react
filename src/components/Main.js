import React, { useState, useEffect } from 'react';
import { api } from '../utils/Api.js'
import Card from './Card.js';
import pencil from '../images/vector_edit-button.svg';
import plus from '../images/vector_add-button.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteCardClick}) {
	const [userName, setUsername] = useState('')
	const [userDescription, setUserDescription] = useState('')
	const [userAvatar, setuserAvatar] = useState('')
	const [cards, setCards] = useState([])

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
		  .then(([{ name, about, avatar }, cardsData]) => {
			 setUsername(name);
			 setUserDescription(about);
			 setuserAvatar(avatar);
			 setCards(cardsData);
		  })
		  .catch((err) => {
			 console.log(err); // выведем ошибку в консоль
		  });
	 }, [])

	return (
	  <main className="content">
		 <section className="profile">
			<div className="profile__description">
			  <button className="profile__avatar-button" type="button">
				 <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" onClick={onEditAvatar} />
			  </button>
			  <div className="profile__info">
			  <div className="profile__username">
				 <h1 className="profile__title">{userName}</h1>
				 <button className="profile__edit-button" type="button" onClick={onEditProfile}>
				 <img className="profile__vector-pencil" src={pencil} alt="Знак с ручкой" />
				 </button>
				 </div>
				 <p className="profile__profession">{userDescription}</p>
			  </div>
			</div> 
			<button className="profile__add-button" type="button" onClick={onAddPlace}>
			<img className="profile__vector-plus" src={plus} alt="Знак с плюсом" />
			</button>
		 </section>
		 <section className="elements">
			<ul className="cards">
			  {cards.map((card) => {
				 return (
				  <Card card={card} onCardClick={onCardClick} onDeleteCardClick={onDeleteCardClick} key={card._id} />
				 )
			  }
			  )}
			</ul>
		 </section>
	  </main>
	);
 }
 
 export default Main;  