import React from "react";
import "./Movers.css";
const Movers = () => {
  return (
    <>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">MOVERS</h1>
        </div>
        <div class="cards1">
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <a
              class="card__title"
              href="https://www.aires.com/"
              target="_blank"
            >
              AIRES
            </a>
          </div>
          <div class="card card-2">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <a
              class="card__title"
              href="https://www.unitedvanlines.com/"
              target="_blank"
            >
              UNITED VAN LINES
            </a>
          </div>
          <div class="card card-3">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <a
              class="card__title"
              href="https://www.leopackersindia.com/"
              target="_blank"
            >
              LEO PACKERS INDIA
            </a>
          </div>
          <div class="card card-4">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <a
              class="card__title"
              href="https://viptransport.com/"
              target="_blank"
            >
              VIP TRANSPORT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movers;
