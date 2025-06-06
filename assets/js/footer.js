const footer = document.createElement("footer");
footer.innerHTML = `
            <div class="auto-container">
                <div class="footer-top">
                    <div class="widget-section">
                        <div class="row clearfix">
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget logo-widget">
                                    <figure class="footer-logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt=""></a></figure>
                                    <div class="text">
                                        <p>The probability of someone needing your services or wantinLorem ipsum dolor sit amet, consectetur adipisicing </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget contact-widget">
                                    <ul class="info clearfix">
                                        <li>
                                            <i class="flaticon-phone"></i>
                                            <p>Call Us</p>
                                            <h5><a href="tel:8602729738">860 -272 -9738</a></h5>
                                        </li>
                                        <li>
                                            <i class="flaticon-maps-and-flags"></i>
                                            <p>Address</p>
                                            <h5>4249 Hart Street, Enfield</h5>
                                        </li>
                                    </ul>
                                    <ul class="social-links clearfix"> 
                                        <li><a href="index.html"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="index.html"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="index.html"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="index.html"><i class="fab fa-dribbble"></i></a></li>
                                        <li><a href="index.html"><i class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget newsletter-widget">
                                    <div class="widget-title">
                                        <h6>Newsletter</h6>
                                    </div>
                                    <div class="widget-content">
                                        <p>Stay Updated on all that’s new add noteworthy</p>
                                        <form action="https://azim.commonsupport.com/Carneshop/contact.html" method="post" class="newsletter-form">
                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" required="">
                                                <button type="submit"><i class="flaticon-paper-plane-1"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom clearfix">
                    <div class="copyright pull-left"><h5>&copy;2020 CopyRight <a href="index.html">Example</a>. All rights reserved.</h5></div>
                    <ul class="footer-nav pull-right clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Blog</a></li>
                        <li><a href="index.html">Contact</a></li>
                    </ul>
                </div>
            </div>
`;

document.getElementById("footer-root").appendChild(footer);
