import React, { Component } from "react";


class Team extends Component {
    render() {
        return (
	<section class="section-team">
		<div class="container">
			
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h3 class="small-title">Our Experts</h3>
						<h2 class="title">Let's meet with our team members</h2>
					</div>
				</div>
			</div>
			
			<div class="row">
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-html5"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfeltts</h3>
							<span class="speciality">President</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Director</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/25zdRMr/person3.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-angular"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Senior</span>
						</div>
					</div>
				</div>
		
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-js"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Joakim Bogfelts</h3>
							<span class="speciality">Senior</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
            
        )
    }
}

export default Team;