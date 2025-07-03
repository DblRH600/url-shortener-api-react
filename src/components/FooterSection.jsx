// Footer section
import logo from "../assets/logo.svg";

function FooterSection() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <a href="#" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="footer-links">
              {/* nav links */}
              <div className="nav--links">
                <h4 className="font-bold mb-2">Features</h4>
                <ul>
                  <li>
                    <a href="#">Link Shortening</a>
                  </li>
                  <li>
                    <a href="#">Branded Links</a>
                  </li>
                  <li>
                    <a href="#">Analystics</a>
                  </li>
                </ul>
              </div>

              {/* nav links */}
              <div className="nav--links">
                <h4 className="font-bold mb-2">Resources</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Developers</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>

              {/* nav links */}
              <div className="nav--links">
                <h4 className="font-bold mb-2">Company</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>

              {/* social links */}
              <div className="social--links">
                <a href="#">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#">
                  <i className="ri-pinterest-fill text-xl"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
