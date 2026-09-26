import "./navigation.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1 className="logo">Voxora</h1>
            </div>
            <div className="col-lg-2">
              <h1 className="footer-title">Visit Link</h1>
              <ul className="list">
                <li>Shop</li>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h1 className="footer-title">Company</h1>
              <ul className="list">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h1 className="footer-title">Contact</h1>
              <ul className="list">
                <li>+980903041125</li>
                <li>Info@youdomain.com</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h1 className="footer-title">Contact</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="row border-top mt-3">
            <div className="col-12 my-4">
              <p className="text-muted text-center">
                © 2026 Voxora. Built with ❤️ by Hossein Douzandeh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
