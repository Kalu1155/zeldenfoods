const navbar = document.createElement("nav");
navbar.innerHTML = `
            <div class="header-top">

                <div class="auto-container">
                    <div class="top-info">
                        <ul class="info-list clearfix">
                            <li>
                                <i class="flaticon-location-pin"></i>
                                Jamnab Estate , FO1, opposite Military pension board , kubwa. Abuja

                            </li>
                            <li>
                                <i class="flaticon-envelope"></i>
                                <a href="mailto:zeldenfoods@gmail.com">zeldenfoods@gmail.com</a>
                            </li>
                            <li class="phone">
                                <i class="flaticon-dial"></i>
                                <a href="tel:2347071822008">+234 7071822008</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-upper">
                <div class="auto-container">
                    <div class="outer-box clearfix">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html"><img src="assets/images/logo.png" alt=""></a></figure>
                        </div>
                        <div class="menu-area pull-right">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li class="current dropdown"><a href="index.html">Home</a>
                                        </li> 
                                        <li class="current dropdown"><a href="about.html">About</a></li> 
                                        <li class="dropdown"><a href="index.html">Products</a>
                                        </li>
                                        <li class="dropdown"><a href="contact.html">Contact</a>
                                           
                                        </li>    
                                        <li class="dropdown"><a href="index.html">Team</a>
                                        </li> 
                                        <li><a href="faq.html">FAQ</a></li> 
                                        <li><a href="faq.html">Testimonies</a></li>              
                                    </ul>
                                </div>
                            </nav>
                            <ul class="menu-right-content pull-left clearfix">
                                <li class="user-box"><a href="index.html"><i class="flaticon-user-symbol-of-thin-outline"></i></a></li>
                                <li class="search-box-outer">
                                    <div class="dropdown">
                                        <button class="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flaticon-search"></span></button>
                                        <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                            <li class="panel-outer">
                                                <div class="form-container">
                                                    <form method="post" action="https://azim.commonsupport.com/Carneshop/blog.html">
                                                        <div class="form-group">
                                                            <input type="search" name="field-name" value="" placeholder="Search...." required="">
                                                            <button type="submit" class="search-btn"><span class="fas fa-search"></span></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cart-box"><a href="shop-1.html"><i class="flaticon-shopping-cart-1"></i><span>0</span></a></li>
                                <li class="nav-box">
                                    <div class="nav-btn nav-toggler navSidebar-button clearfix">
                                        <i class="flaticon-list"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box clearfix">
                        <figure class="logo-box pull-left"><a href="index.html"><img src="assets/images/small-logo.png" alt=""></a></figure>
                        <div class="menu-area pull-right">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                    </div>
                </div>
                
                </div>
`;

document.getElementById("navbar-root").appendChild(navbar);
