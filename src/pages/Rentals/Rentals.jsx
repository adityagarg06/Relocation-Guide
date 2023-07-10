import React from 'react'
import './Rentals.css'
function Rentals() {
  return (
    <div className='wrapper_rental'>
      <div class="main-container">
    <div class="heading">
      <h1 class="heading__title">RENTALS</h1>
    </div>
    <div class="cards_rental">
      <div class="card card-3">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p><a class="card__title" href="https://www.facebook.com/HousingAnywherecom/" target="_blank">HOUSING ANYWHERE</a>
      </div>
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p><a class="card__title" href="https://www.places4students.com/" target="_blank">PLACES 4 STUDENTS</a>
      </div>
      <div class="card card-2">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p><a class="card__title" href="https://www.nestpick.com/" target="_blank">NESTPICK</a>
      </div>
      <div class="card card-4">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p><a class="card__title" href="https://uniacco.com/" target="_blank">UNIACCO</a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Rentals