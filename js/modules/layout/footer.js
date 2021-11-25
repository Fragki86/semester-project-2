export function footer() {
  const footerContainer = document.querySelector(".footer-container")

  footerContainer.innerHTML = `<div class="logo-social-container">
                                  <div class="logo-footer">
                                    <img src="images/logo-footer.svg">
                                  </div>
                                  <div class="social-media">
                                    <a href="/" class="facebook">
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="/" class="pinterest">
                                      <i class="fab fa-pinterest-p"></i>
                                    </a>
                                    <a href="/" class="instagram">
                                      <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="/" class="youtube">
                                      <i class="fab fa-youtube"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="info-container">
                                  <div class="newsletter">
                                    <h3>Subscribe to newsletter</h3>
                                    <form class="newsletter-form">
                                      <div>
                                        <input type="email" placeholder="Enter your email">
                                      </div>
                                      <button type="submit">Subscribe</button>
                                    </form>
                                  </div>
                                  <div>
                                    <h3>About Us</h3>
                                    <a href="/">Our Values</a>
                                    <a href="/">History</a>
                                  </div>
                                  <div>
                                    <h3>Contact</h3>
                                    <p>Address 23, 5522</p>
                                    <p>ecokids@eco.com</p>
                                    <p>+47 123 45 678</p>
                                  </div>
                                  <div>
                                    <h3>Account</h3>
                                    <a href="/">Profile</a>
                                    <a href="/">My account</a>
                                    <a href="/">Preferences</a>
                                    <a href="/">Purchases</a>
                                  </div>
                                </div>`
}