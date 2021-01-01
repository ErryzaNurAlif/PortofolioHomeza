class ContentHeader extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div id="header-top">
            <h2>Houseza</h2>

            <div id="menu">
                <img src="asset/images/icon_menu.svg" alt="">
            </div>

            <nav id="drop_menu">
                <ul id="list-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#recent">Recent</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#testi">Testimonial</a></li>
                </ul>
            </nav>

            <div id="contact-us">
                <a href="">Contact Us</a>
            </div>
        </div>

        <div id="header-bottom">
            <h3>Real Estate advice <br> for real locals.</h3>

            <p>In expecting display, thought. Rationally and at it's of </p>
            <p>headline proper then met harmonics. Sign the had no</p>
            <p>made reached are desk mars might to first.</p>

            <div id="get-started">
                <a href="">Get Started</a>
            </div>

            <div id="promo">
                <div id="items-promo1">
                    <figure>
                        <img src="asset/images/Icon feather-home.svg" alt="">
                    </figure>
                    <div class="promo-desc">
                        <p>90<span>%</span></p>
                        <p>Already Inavited.</p>
                    </div>
                </div>

                <div id="items-promo2">
                    <figure>
                        <img src="asset/images/Icon feather-smile.svg" alt="">
                    </figure>
                    <div class="promo-desc">
                        <p>50<span>k</span></p>
                        <p>Satisfied Customers.</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("content-header", ContentHeader);