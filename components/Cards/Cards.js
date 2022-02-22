import React, { Component } from "react";

const CardsInfo = () => {
  return (
    <div class="container card-info">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div>
          <div class="col">
            <div class="card animate__flipInY animate__animated">
              <div class="image">
                <div id="zoom-In">
                  <figure>
                    <img src="/static/03about.jpg" alt="" />
                    <h2>
                    SERVICE OCH UNDERHÅLL
                    </h2>
                  </figure>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card animate__flipInY animate__animated">
            <div class="image">
              <div id="zoom-In">
                <figure>
                  <img src="/static/01about.jpg" alt="" />
                  <h2>
                  ENTREPRENAD
                  </h2>
                  <hr></hr>
                </figure>

              </div>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card animate__flipInY animate__animated">
            <div class="image">
              <div id="zoom-In">
                <figure>
                  <img src="/static/02about.jpg" alt="" />
                  <h2>
                  BELYSNINGS
                  PRODUKTER
                  </h2>
                </figure>

              </div>
            </div>

          </div>
        </div>
        <div class="col-md-12">

          <div class="image1">
            <div id="zoom-Out">
              <figure>
                <img className="card-mb" src="/static/05about.jpg" class="img-fluid" alt="..." />
                <h1>
                TEKNISKA TJÄNSTER
                </h1>
              </figure>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CardsInfo;