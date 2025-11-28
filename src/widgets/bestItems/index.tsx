import Watch from "@shared/assets/images/png/best/watch.png";
import "./style.scss";
import Button from "../../shared/ui/button";

const BestItems = () => {
  return (
    <section className="best">
      <div className="best__header">
        <h2 className="best__title">Save on our most selled items.</h2>
        <p className="best__subtitle">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>

      <div className="best__grid">
        {[1, 2, 3].map((_, idx) => (
          <div className="best__card" key={idx}>
            <div className="best__text">
              <h3 className="best__text-subtitle">Smart light bulb pack</h3>
              <p className="best__text-title">Latest and gratest</p>
            </div>
            <Button>Shop now</Button>
            <img src={Watch} alt="Product" className="best__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestItems;
