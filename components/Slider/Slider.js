import React, { Component } from "react";


const SliderCarrousel = () => {

  return (
    <div className="d-flex flex-column mt-0 mb-4 slide">
      <div id="carouselExampleIndicators" class="carousel slide  carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div class="carousel-caption text-left">
              <h3 class="wow fadeInRight animate__fadeInLeft animate__animated animate__bounce" data-wow-delay="0.2s">VÄLKOMMEN TILL </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">BogFelts</h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">Företag specialiserat på offentlig belysning.</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">och kablage</a>
            </div>
            <img src="/static/01.carousel.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
          <div class="carousel-caption text-left">
              <h3 class="wow fadeInRight animate__fadeInLeft animate__animated animate__bounce" data-wow-delay="0.2s">VÄLKOMMEN TILL </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">BogFelts</h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">Företag specialiserat på offentlig belysning.</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">och kablage</a>
            </div>
            <img src="/static/04.carousel.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
          <div class="carousel-caption text-left">
              <h3 class="wow fadeInRight animate__fadeInLeft animate__animated animate__bounce" data-wow-delay="0.2s">VÄLKOMMEN TILL </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">BogFelts</h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">Företag specialiserat på offentlig belysning.</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">och kablage</a>
            </div>
            <img src="/static/03.carousel.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
          <div class="carousel-caption text-left">
              <h3 class="wow fadeInRight animate__fadeInLeft animate__animated animate__bounce" data-wow-delay="0.2s">VÄLKOMMEN TILL </h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">BogFelts</h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">Företag specialiserat på offentlig belysning.</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">och kablage</a>
            </div>
            <img src="/static/05.carousel.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}


export default SliderCarrousel;