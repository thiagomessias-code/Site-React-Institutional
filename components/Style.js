import React from "react";

export default () => (
    <style jsx global>{`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');


    * {
    box-sizing: border-box !important;
}
    body {
      color: #666666;
      background-color: #F8F8F8;
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
      line-height: 1.80857;
      font-weight: normal;

    }

    h1,h2 {
      font-weight: bold;
    }

   .wrap {
     flex-wrap: wrap;
   }


.vertical {
  flex-direction: column;
}
.horizontal {
  flex-direction: row;
}

    .flex { display: flex;}
    .flex-1 {flex: 1}
    .flex-2 {flex: 2}
    .flex-3 {flex: 3}

    .flex-center {
     justify-content: center;
     align-items: center;
    }
    .Header {
        max-heigth: 100px;
    }
    .header-wrapper {
    max-width: 1700px;
    margin:0 auto;
    width: 100%;
    display: flex;}


  .header {
    background-color:#3c3c413c;
    position: fixed;
    height: 80px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    transition: .3s ease-in;
}
.header-bg{
  background-color: #3C3C41;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.329);
}
.header .navbar-expand-md .navbar-nav .nav-link {
  color: white;
  font-size: 18px;
  font-weight: 400;
  padding: 5px 0px;
  margin-left: 30px;
  position: relative;
  text-shadow: rgba(0, 0, 0, 0.515) 0px 2px 2px;
}
.header-bg .navbar-expand-md .navbar-nav .nav-link{
  color: white;
  font-size: 18px;
  padding: 5px 0px;
  font-weight: 400;
  margin-left: 30px;
  position: relative;
   text-shadow: none;
}

 .header .navbar-nav .nav-link:hover {
  color: black;
  text-shadow:none;
  
  
  
}
.header-bg .navbar-nav .nav-link:hover {
  color: black;
}

.header .navbar-expand-md .navbar-toggler:active {
  border: 1px solid rgb(106, 106, 226);
  color: rgb(106, 106, 226);
}
.navbar-expand-md .navbar-nav .nav-link:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: rgb(106, 106, 226);
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
}

.navbar-expand-md .navbar-nav .active::before,
.navbar-expand-md .navbar-nav .nav-link:hover::before {
  width: 50%;
}


.navbar-expand-md .navbar-toggler {
  background: #323191;
  border-radius: 0px;
  margin: 5px;
  cursor: pointer;
  float: right;
}



.slide {
  margin-top: -50px
 
}

.about {
  max-height:650px;
  padding-top: 7em;
  padding-bottom: 0;
  margin-bottom: 100px
}

.about .titlepage {
  text-align: right;
  padding: 0;
  float: left;
  width: 100%;
  max-width: 427px;
  margin-top: 100px
}

.padding-left {
  padding-left: 0;
}

.about .titlepage h2 {
  color: #aaa;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 32px;
}

.about .titlepage p {
color: #aaa;
font-family: 'Poppins', sans-serif;
font-size: 17px;
line-height: 25px;
font-weight: 300;
padding: 20px 0 25px 0;
}

.about_img figure {
  margin: 0;
}

.about_img figure img {
  width: 90%;
  max-height:650px;
}




.about .box {
  margin-bottom: 2em;
  width: 100%;
}
.about .box {
  background: #532FB7;
  width: 80%;
  margin: 10px auto 0 auto;
  padding: 2em 0;
}
.about .box .num {
  font-size: 120px;
  color: #fff;
  font-weight: 700;
  line-height: 120px;
}
.about .box span {
  display: block;
  color: #fff;
}
.about .box .yr {
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 7px;
}
.about .box span {
  display: block;
  color: #fff;
}
.text-center {
  text-align: center;
}

.about .sm {
  font-size: 16px;
  letter-spacing: 20px;
  color: #cccccc;
  text-transform: uppercase;
  display: block;
  margin-bottom: 30px;
  font-weight: 300;
}

.about h2 {
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.about h2 .thin {
  font-weight: 100;
}
.about h2 span {
  display: block;
  margin-bottom: 0;
  line-height: 60px;
}

.about h2 .thick {
  font-weight: 700;
}
.about h2 span {
  display: block;
  margin-bottom: 0;
  line-height: 60px;
}
.about .box .thin {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.about .box span {
  display: block;
  color: #fff;
}

.about .txt {
  margin-bottom: 20px;
  margin: 0 0 10px;
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.card-info .card{
  margin-top: 100px;
  position: relative;
    width: 100%;
    margin-bottom: 8vw;
    height: 500px;
}
.card-info .card figure {
  overflow: hidden;
  width: 100%;
  height: 500px;
  
}
.card-info figure {
  overflow: hidden;
  width: 100%;
  
}

.card-info h2 {
    top: 0;
    position: absolute;
    font-size: 30px;
    padding: 2vw 3vw 0;
    color: #ffff;
    z-index: 400;
    text-shadow: rgba(0, 0, 0, 0.515) 0px 2px 2px;
}

.card-info .image1 figure h1 {
  margin-top: -400px;
  position: absolute;
  font-size: 30px;
  padding: 2vw 3vw 0;
  color: #fff;
  z-index: 400;
  text-shadow: rgba(0, 0, 0, 0.515) 0px 2px 2px;
}


 .image img {
	display: block;
	width: 100%;
	height: 500px;
	cursor: pointer;
  margin-bottom: 0;
}
.image1 img {
	display: block;
	width: 100%;
  height: 400px;
	cursor: pointer;
}
.image #zoom-In figure img {
	transform: scale(1);
	transition: 0.5s ease-in-out;
}
.image #zoom-In figure:hover img {
	transform: scale(1.2);
}

.image1 #zoom-Out figure img {
	transform: scale(1.2);
	transition: 0.5s ease-in-out;
}
.image1 #zoom-Out figure:hover img {
	transform: scale(1);
}
.card-info .image1 figure h2 span{
	background-color: red;
  border: 10px solid black;
}
.card-info .image1 {
margin-top: -100px
}

.about .carousel-sus img {
  height: 500px;
}
.sus {
  margin-top: 100px
  }





@media screen and (max-width:940px) {
  .header .navbar-collapse {
    background-color: #aaa;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    transition: 0.6s;
  }
  .header-bg .navbar-collapse {
    background-color: white;
    color: black;
  }
  .header-bg .navbar-nav .nav-link:hover {
    color: #aaa;
    
  }
  }

    `}
    </style>
)