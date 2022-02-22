import React from "react";

const banner = () => {

   return (
      <div id="about" class="about">
         <div class="container">
            <div class="row">
            <div class="col-md-4 col-md-push-4 ">
                  <div class="box text-center animate__fadeInLeft animate__animated">
                     <span className="num">30</span>
                     <span className="yr">år</span>
                     <span className="thin">Erfarenhet</span>
                  </div>
               </div>
               <div class="col-md-4 col-md-pull-4 animate__fadeInUp animate__animated  animate__repeat-1"  >
               <span className="sm">välkommen</span>
                  <h2>
                  <span className="thin">FRAMGÅNGS HEMLIGHETER</span>
                  <span  className="thick">AV VÅRA PROJEKT</span>
                  </h2>
               </div> 
               <div class="col-md-4 col-md-pull-4 animate__fadeInRight animate__animated">
                  <p className="txt">Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning.</p>
                  <button className="btn btn-primary">Ver</button>
               </div>
               </div>
            </div>
      </div>
 
   )
 }
 
 
 export default banner;










