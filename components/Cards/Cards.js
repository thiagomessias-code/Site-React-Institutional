import React, { Component, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Titulo from '../../components/Text/Titulo';

const CardsInfo = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    
    <div class="container card-info" aos="flip-left" aos_offset="200">
       <div class="container titulo">
            <span className="sub-title text-center">
                  Företag
              </span>
              <Titulo tipo="h1" titulo="Upptäck vårt företag"/>
          </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div>
          <div class="col">
            <div class="card aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
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
          <div class="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
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
          <div class="card aos-init aos-animate" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
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
                <img className="card-mb " src="/static/05about.jpg" class="img-fluid" alt="..." />
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