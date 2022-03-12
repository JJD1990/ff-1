const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
// const req = require('express/lib/request');
const app = express();


app.use('/', (req, res) => {
    console.log("we got a request")
    res.send(`<!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
      <meta name="generator" content="Hugo 0.88.1">
      <meta name="google-site-verification" content="b3lPBb0R6-njXB46V1QpCu9ycOYfaK0Ti3ZIS2eClMQ" />
      <title>Fonseca Fitness - Basingstoke's Female only Gym</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/carousel/">
    
    
    
    
      <!-- Bootstrap core CSS -->
      <!-- <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    
      <style>
        .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
    
        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }
        /* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

html, body {
  max-width: 100%;
  overflow-x: hidden;
}

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #000;
  color: #fff;
}

i {
  color: orange;
  padding: 10px;
}

h2 {
  color: orange;
}

.btn {
  background-color: orange;
  color: black;
}

.btn:active {
  background-color: orange;
  color: black;
  box-shadow: orange;
}

.btn:hover{
  background-color: orange;
  color: #fff;
}
.download{
  margin-top: 8px;
  margin-bottom: 0;
  padding-bottom: 0;
}

.session {
  margin-left: 15px;
}

.nav-item {
  color: orange;
}

.nav-logo {
  margin-right: 10px;
}

.fflogo1 {
  width: fit-content;
  height: fit-content;
}

span {
  color: orange;
}

#timetable {
  height: 800px;
  width: 400px;
  margin-top: 50px;
  padding-bottom: 50px;
}

#membership-group {
  height: fit-content;
  width: auto;
  padding-left: 70px;
}

#membership {
border-top: 2px solid orange;
}

#pricingimg{
position: relative;
align-items: center;
  margin-top: 50px;
}

#abouttitle {
  position: relative;
align-items: center;
  margin-top: 80px;
}

#app-download{
  position: relative;
  align-items: center;
    margin-top: 80px;
}

.accordion-item{
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #000;
  color: #fff;
}

.accordion-button{
  background-color: orange;
  color: #000;
  display: block;
  font-size: 30px;
}

.accordion-header{
  color: #000;
  background-color: orange;
  text-align: center;
}

#table {
  margin-top: 50px;
  text-align: center;
  color: orange;
  border: orange;
}

.accordion-body {
  color: #000;
  background-color: orange;
  text-align: center;
}

.accordian-body.terms {
  text-align: left;
}

img {
  border-radius: 20px;
}

.rounded-circle {
  border: 2px solid orange;
  margin-bottom: 20px;
}

hr {
  color: orange;
}

.card {
  background-color: black;
}

.card img {
  border-radius: none;
  padding-top: 10px;
  padding-bottom: 10px;
}

.card-img-top {
  height: 400px;
  width: 400px;
  border-radius: 20px;
  display: inline-block;
}

.about-logo {
  margin-top: 50px;
  margin-bottom: 0;
}

#card {
  border-radius: 20px;
}

.footer {
  bottom: 0;
  padding: 0;
  margin: 0;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -.05rem;
}

.btt {
  color: orange;
}

#goodtimes img{
  height: 600px;
}

#facilities-list {
  list-style-type: none;
}

#dlimg {
  height: 30%;
  margin-bottom: 60px;
}

#jointhefamily {
  margin-top: 30px;
}

#fclist{
  font-size: 28px;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.qtitle {
  text-align: center;
  padding-top: 20px;
}

#gymimg {
  height: 450px;
}

#contactimg {
  height: 450px;
}

#pricingtitle {
  top: 100px;
  padding-top: 20px;
}

form { 
  max-width:420px; 
  height: fit-content;
  top: 100px;
  padding: 0 10px;
}

.feedback-input {
  color:white;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid orange;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
width: 100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #fff; }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}


      </style>
    
    
      <!-- Custom styles for this template -->
      <link href="style.css" rel="stylesheet">
    </head>
    
    <body>
    
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
          <div class="container-fluid">
    
            <img src="https://i.imgur.com/yC4IfAS.png" width="30" height="30" class="nav-logo"
              class="d-inline-block align-top" alt="">
            <a class="navbar-brand" href="./index.html"><span>Fonseca Fitness</span> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./about.html"><span>About Us</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./timetable.html"><span>Classes</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pricing.html"><span>Pricing</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./contact.php"><span>Contact Us</span></a>
                </li>
              </ul>
              <form class="d-flex">
    
                <a href="https://www.facebook.com/FonsecaFitness1/"><i class="fa-brands fa-facebook-square fa-2x"></i></a>
                <a href="https://www.instagram.com/fonsecafitness_/"><i class="fa-brands fa-instagram fa-2x"></i></a>
    
                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
                <!-- <button class="btn session" type="submit">Join Now</button> -->
                <p class="download"><a class="btn session" href="./download.html">Download & Join</a></p>
    
              </form>
            </div>
          </div>
        </nav>
      </header>
    
      <main>
    
        <div class="container-fluid">
          <div class="card-group">
            <div class="card animate__animated animate__fadeInDown">
              <img src="https://i.imgur.com/acKb11x.jpg" class="card-img" alt="...">
            </div>
            <div class="card animate__animated animate__fadeInDown">
              <img src="https://i.imgur.com/IcNRkxa.jpg" class="card-img" alt="">
            </div>
            <div class="card animate__animated animate__fadeInDown">
              <img src="https://i.imgur.com/woPJxPf.jpg" class="card-img" alt="...">
            </div>
    
          </div>
    
          <hr class="featurette-divider">
    
          <div class="container marketing">
    
    
    
            <!-- Three columns of text below the carousel -->
            <div class="row">
              <div class="col-lg-4">
                <img class="rounded-circle animate__animated animate__heartBeat" src="https://i.imgur.com/FXMlHYl.png"
                  alt="" height="180px" width="180px">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
                </svg>
    
                <h2>Vision</h2>
                <p>One day all women will know how to look after their body. From the very base of their hormonal health
                  to
                  how they can move their body without limits.
    
                  We are more that a fitness studio.</p>
                <!-- <p><a class="btn" href="#">View details &raquo;</a></p> -->
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                <img class="rounded-circle animate__animated animate__heartBeat" src="https://i.imgur.com/yC4IfAS.png"
                  alt="" height="180px" width="180px">
                <!-- <img src="https://i.imgur.com/ohdrr04.mp4" allow="autoplay" frameborder="0"></iframe> -->
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
                </svg>
    
                <h2>One Team</h2>
                <p>We work in synergy bringing together individual skills and expertise to create the best possible outcomes
                  for
                  you, the women of Fonseca Fitness.
                </p>
                <p><a class="btn" href="./download.html">Download & Join</a></p>
              </div><!-- /.col-lg-4 -->
              <div class="col-lg-4">
                <img class="rounded-circle animate__animated animate__heartBeat" src="https://i.imgur.com/JnnY4YA.png"
                  alt="" height="180px" width="180px">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em"></text>
                </svg>
    
                <h2>Values</h2>
                <p>We are passionate about creating the best possible energy within our classes & 1-1 environments
                  whilst
                  also
                  investing in our knowledge for the women of Fonseca Fitness. </p>
                <!-- <p><a class="btn" href="#">View details &raquo;</a></p> -->
              </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
    
    
            <!-- START THE FEATURETTES -->
    
            <hr class="featurette-divider">
    
            <div class="row featurette ">
              <div class="col-md-6">
                <h2 class="featurette-heading"><span>Farah Fonseca</span></h2>
    
                <p>Farah founded Fonseca Fitness in 2012 and is our head coach.
    
                  Farah has worked with thousands of women to help them to become the best version of themselves. In
                  2015,
                  Farah studied at the College of Naturopathic Medicine. After that, started working with
                  holistic
                  coaches in America to learn more than what was covered with just a ‘basic’ personal training
                  qualification.
                  Farah has completed a course at the National Institute for Eating Disorders to help women and young
                  girls
                  address their relationship with both themselves, others and food. Farah also has many sporting
                  achievements
                  under her belt (quite literally).
                <ul>
                  <li> 3 x England’s Strongest Woman</li>
                  <li> 1 x Britain’s Strongest Woman</li>
                  <li> 2018 Strongest Woman in the World</li>
                  <li> Professional Strongwoman</li>
                </ul>
                For those who are ready to work hard, Farah is here for you. Not only for your time in the studio, but in
                all
                areas of your health journey.
                </p>
                <a href="./about.html#meetthecoaches"><button class="btn">Meet the Coaches</button></a>
              </div>
              <div class="col-md-5">
    
                <img src="https://i.imgur.com/CnaCvxM.jpg" height="600px" width="500px" alt="">
    
              </div>
            </div>
          </div>
    
          <hr class="featurette-divider">
    
          <div class="card text-center">
            <div class="card-header">
              <h2 class="card-title text-center"><span>Facilities Include:</span></h2>
              <div class="d-none d-sm-block p-2">
                <img src="https://i.imgur.com/cnp5Xfh.jpg" id="facilities-img" height="600px" width="500px" alt="">
              </div>
            </div>
            <div class="card-body" id="fclist">
              <p class="card-text text-center">
              <p>Multi Gym</p>
              <p>Benches</p>
              <p>Range of Dumbells up to 25KG</p>
              <p>Sqaut Racks</p>
              <p>Air Bikes</p>
              <p>Rowing Machine</p>
              <p>Plyo Boxes</p>
              <p>Prowler</p>
              <p>Sled</p>
              <p>Trap Bar</p>
              <p>Safety Squat</p>
              <p>FB Bar</p>
              <p>Normal Bars</p>
              <p>Farmers Walk</p>
              <p>Sandbags</p>
              <p>Based a 5 minute drive away from the town centre, we offer free parking!</p>
    
              </p>
              <a href="./download.html"><button class="btn session">Download and Join</button></a>
            </div>
          </div>
          <hr class="featurette-divider">
    
          <div class="text-center">
            <p><span> Gym opening times:
                Monday-Friday: 6am-8pm
                Saturday & Sunday: 8am-12pm</span></p>
          </div>
    
    
          <hr class="featurette-divider">
    
          <footer class="footer">
            <nav class="navbar navbar-expand-md navbar-dark bg-black">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"><strong><span>Fonseca Fitness</span></strong><br>
                  <span> Unit 3 Telford Road <br>
                    Basingstoke <br>
                    RG21 6YU </span><br>
                  <a class="nav-link active" aria-current="page" href="#"><span>Back to the Top</span></a>
                </a>
    
    
                <span class="mx auto">Call or e-mail us: 07568163126 - farah@fonsecafitness.co.uk </span>
                <form class="d-flex">
    
                  <a href="https://www.facebook.com/FonsecaFitness1/"><i class="fa-brands fa-facebook-square fa-2x"></i></a>
                  <a href="https://www.instagram.com/fonsecafitness_/"><i class="fa-brands fa-instagram fa-2x"></i></a>
    
                  <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
    
                </form>
              </div>
            </nav>
    
          </footer>
      </main>
      <script src="index.js"></script>
      <!-- <script src="../assets/dist/js/bootstrap.bundle.min.js"></script> -->
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>
    
    
    </body>
    
    </html>`)
})

app.get('/about', (req, res) => {
    console.log("request sent About")
    res.send("ABOUT")
})


app.listen(3000, () => {
    console.log("listening on port 3000")
})