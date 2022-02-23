import React, { Component } from "react";
import { Button } from "reactstrap";


class Banner extends Component {
  render() {
    return (
      <div id="about" class="about" >
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-md-push-4" >
              <div class="box text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <span className="num">30</span>
                <span className="yr">år</span>
                <span className="thin">Erfarenhet</span>
              </div>
            </div>
            <div class="col-md-4 col-md-pull-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  >
              <span className="sm">välkommen</span>
              <h2>
                <span className="thin">FRAMGÅNGS HEMLIGHETER</span>
                <span className="thick">AV VÅRA PROJEKT</span>
              </h2>
            </div>
            <div class="col-md-4 col-md-pull-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" >
              <p className="txt">Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning.</p>
              <Button className="btn-about" outline>
                Ver
              </Button>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Banner;