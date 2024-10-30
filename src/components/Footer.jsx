
import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#resources" className="footer-link">Resources</a>
          <a href="#stories" className="footer-link">Stories</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Uncherted Travels. All rights reserved.</p>
          <p>Follow us on:
            <a href="https://twitter.com" className="social-link"> Twitter</a>,
            <a href="https://facebook.com" className="social-link"> Facebook</a>,
            <a href="https://instagram.com" className="social-link"> Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
