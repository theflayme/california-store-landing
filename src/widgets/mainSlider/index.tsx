import "./style.scss";

import sliderMobile from "@shared/assets/images/png/sliderMobile.png";

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider-container">
        <div className="slider-content">
          <div className="content-info">
            <h2>The new phones are here take a look.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
            </p>
          </div>
          <button>Shop Now</button>
        </div>
        <img src={sliderMobile} alt="Slide 1" />
      </div>
    </section>
  );
};
export default Slider;
