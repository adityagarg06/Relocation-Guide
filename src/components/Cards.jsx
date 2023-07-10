import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='title'>At Your Service</h1>
      <hr />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://us.123rf.com/450wm/tatianasun/tatianasun1806/tatianasun180600072/103390873-truck-with-house-icon-vector-isolated-simple-symbol.jpg?ver=6'
              text='No clue whom to contact for packing and moving? We’re here for you!.'
              label='Movers'
              path='/services'
            />
            <CardItem
              src='https://static.vecteezy.com/system/resources/previews/007/636/859/original/community-logo-design-free-vector.jpg'
              text='Worried, you won’t find any friends?'
              label='Community'
              path='/services'
            />
            <CardItem
              src='https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg'
              text='Want to talk to someone who lives there and see the surrounding?'
              label='Get In Touch'
              path='/services'
            />
            <CardItem
              src='https://static.vecteezy.com/system/resources/previews/000/494/172/original/logo-house-for-sale-rental-or-home-ownership-vector-illustration.jpg'
              text='Looking for a house? See the wide variety of houses our partners can provide'
              label='Rentals'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;