<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Fonseca Fitness - Contact Us</title>
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
                            <a class="nav-link" href="./timetable.html"><span>Timetable</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./pricing.html"><span>Membership</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.php"><span>Contact Us</span></a>
                        </li>
                    </ul>
                    <form class="d-flex">

                        <a href="https://www.facebook.com/FonsecaFitness1/"><i
                                class="fa-brands fa-facebook-square fa-2x"></i></a>
                        <a href="https://www.instagram.com/fonsecafitness_/"><i
                                class="fa-brands fa-instagram fa-2x"></i></a>

                        <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
                        <p class="download"><a class="btn session" href="./download.html">Download & Join</a></p>

                    </form>
                </div>
            </div>
        </nav>
    </header>

    <body>

        <div class="container-fluid">
            <div class="card-group">
                <!-- <div class="card animate__animated animate__fadeInDown">
                    <img src="https://i.imgur.com/DoSGpcV.png" class="card-img" id="contactimg" alt="...">
                </div> -->
                <div class="mx-auto">
                    <h2 class="qtitle animate__animated animate__fadeInDown">Contact us</h2>
                    <form class="animate__animated animate__fadeInDown text-center">

                        <input name="name" type="text" class="feedback-input" placeholder="Name" />

                        <input name="email" type="text" class="feedback-input" placeholder="Email" />

                        <input name="phone" type="tel" class="feedback-input" placeholder="Phone Number" />

                        <textarea name="text" class="feedback-input" placeholder="Ask a question"></textarea>

                        <div class="status">

                        </div>
                        <input class="btn" type="submit" value="SUBMIT" />

                    </form>
                </div>
                <!-- <div class="card animate__animated animate__fadeInDown">
                    <img src="https://i.imgur.com/ZBmnHRW.jpg" class="card-img" id="gymimg" alt="...">
                </div> -->

            </div>
            <hr class="featurette-divider">

            <div class="text-center">
                <p><span> Gym opening times: <br>
                        Monday-Friday: 6am-8pm <br>
                        Saturday & Sunday: 8am-12pm</span></p>
            </div>


            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item" style="color: rgb(235,91,12);">
                    <h2 class="accordion-header" id="flush-headingOne" style="color: rgb(10,4,1);">
                        <button class="accordion-button collapsed btn d-block text-center" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Terms and Conditions
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">

                            <p>1. Our memberships are available for minimum term of 1, 6 or
                                12 months.</p>
                            <p>2. All payments are to be made via Direct Debit on the 1st of
                                every month.</p>
                            <p>3. If you are paying by direct debit and you fall behind with
                                your membership fees and this is not caused by bank error,
                                we may suspend or cancel your membership. We may pass
                                your details to a debt collection company to recover any
                                outstanding payments.</p>
                            <p>4. Once a member, you will need to download our Fonseca
                                Fitness App in order to book onto classes.</p>
                            <p>5. If you are on any membership, excluding from Mum & Baby you
                                are welcome to access any of our classes.</p>
                            <p>6. If you sign up for personal training with any of our coaches,
                                you will be invoiced in arrears for the month you have
                                trained. These payments are due on the 1st of every month.</p>
                            <p>7. The prices, availabilities and ability to have physical or
                                virtual personal training is dictated by the trainer
                                themselves, as self-employed.</p>
                            <p>8. You can book classes in advance via our App.</p>
                            <p>9. We may disable your access to the booking class system if
                                we deem that you're booking and not attending at a high
                                frequency.</p>
                            <p>10. If you need to take a temporary break from your
                                membership for any reason you can freeze your
                                membership for 1 month at a time. To still have access to
                                our facebook support group & App this will be charged at
                                ??15 per month whilst your full membership is frozen. You
                                must request to freeze your membership at least 5 days
                                before your DD is due.</p>

                        </div>
                    </div>
                </div>
            </div>

            <hr class="featurette-divider">


            <footer class="footer">
                    <nav class="navbar navbar-expand-md navbar-dark bg-black">
                        <div class="container-fluid mx-auto">
                            <a class="navbar-brand" href="#"><strong><span>Fonseca Fitness</span></strong><br>
                                <span> Unit 3 Telford Road <br>
                                    Basingstoke <br>
                                    RG21 6YU </span><br>
                                <a class="nav-link active" aria-current="page" href="#"><span>Back to the
                                        Top</span></a>
                            </a>


                            <span class="mx auto">Call us on: 07568163126 
                            </span>
                            <form class="d-flex">

                                <a href="https://www.facebook.com/FonsecaFitness1/"><i
                                        class="fa-brands fa-facebook-square fa-2x"></i></a>
                                <a href="https://www.instagram.com/fonsecafitness_/"><i
                                        class="fa-brands fa-instagram fa-2x"></i></a>

                                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->

                            </form>
                        </div>
                    </nav>

                </footer>
            </main>
            <!-- <script src="index.js"></script> -->
            <!-- <script src="../assets/dist/js/bootstrap.bundle.min.js"></script> -->
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                crossorigin="anonymous"></script>


    </body>

</html>