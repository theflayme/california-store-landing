import Phone from "@shared/assets/images/png/selled/Laptop.png";
import "./style.scss";

const SelledItems = () => {
  return (
    <section className="selled">
      <div className="selled__header">
        <h2 className="selled__title">Save on our most selled items.</h2>
        <p className="selled__subtitle">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>

      <div className="selled__grid">
        {[1, 2, 3, 4].map((_, idx) => (
          <div className="selled__card" key={idx}>
            <img src={Phone} alt="Product" className="selled__image" />

            <div className="selled__text">
              <p className="selled__text-title">MacBook Pro 13</p>
              <h3 className="selled__text-subtitle">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </h3>
              <span className="selled__text-price">$1,299.00</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelledItems;
