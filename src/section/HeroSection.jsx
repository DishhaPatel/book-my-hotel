import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="hero-text">
          <h2 className="hero-heading">Find the Perfect deal, always.</h2>
          <div className="hero-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            officia non corrupti pariatur aspernatur sint modi commodi cum
            possimus blanditiis facilis beatae repellendus, autem voluptates
            ratione delectus architecto quae dolore.
          </div>
        </div>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
