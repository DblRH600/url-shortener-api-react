// Hero Section
import illustration from "../assets/illustration-working.svg";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex">
          {/* hero image */}
          <div className="hero-image">
            <img src={illustration} alt="person typing on computer" />
          </div>

          {/* content */}
          <div className="hero-content">
            <h1>More than just shorter links</h1>
            <p className="hero-comment">
              Build your brand&#39;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <a href="#" datatype="narrow" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
