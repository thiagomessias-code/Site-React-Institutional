import React, { Component } from 'react'
import { Video } from '../Videosection';


class About extends React.Component {
    render (){
        return (
            <section class="about-section">
            <div class="container">
                <div class="row clearfix">
                    
             
                    <div class="content-column col-md-6 col-sm-12 col-xs-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <div class="title">About Us</div>
                                <h2>We Are The Leader In <br/> The Interiores</h2>
                            </div>
                            <div class="text">Bogfelts har mångårig och gedigen erfarenhet av både små och stora entreprenader inom belysningsteknik. Med branscherfarenhet sedan 1989 har vi bred kompetens inom verksamheten med god kännedom om kundens behov och önskemål för ett välfungerande samarbete. Vi erbjuder kunden en optimerad totallösning för en kostnadseffektiv och driftsäker belysningsanläggning.</div>
                            <div class="email">Request Quote: <span class="theme_color">freequote@gmail.com</span></div>
                            <a href="about.html" class="theme-btn btn-style-three">Read More</a>
                        </div>
                    </div>
                    
             
                    <div class="image-column col-md-6 col-sm-12 col-xs-12">
                        <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="image">
                                <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt=""/>
                                <div class="overlay-box">
                                    <div class="year-box"><span class="number">5</span>Years <br/> Experience <br/> Working</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        <Video/>
        </section>
    
        )
    }
   
}

export default About;