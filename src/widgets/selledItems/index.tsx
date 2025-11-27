import Phone from "@shared/assets/images/png/selled/Laptop.png";
import "./style.scss";

const SelledItems = () => {
  return (
    <>
      <div className="selled-header">
        <h2 className="selled-title">Save on our most selled items.</h2>
        <p className="selled-subtitle">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>
      <div className="selled-grid">
        {/* LAPTOP CARD */}
        <div className="card-selled">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-title">MacBook Pro 13</p>
            <h3 className="text-subtitle">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </h3>
            <span className="text-price">$1,299.00</span>
          </div>
        </div>
        <div className="card-selled">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-title">MacBook Pro 13</p>
            <h3 className="text-subtitle">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </h3>
            <span className="text-price">$1,299.00</span>
          </div>
        </div>
        <div className="card-selled">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-title">MacBook Pro 13</p>
            <h3 className="text-subtitle">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </h3>
            <span className="text-price">$1,299.00</span>
          </div>
        </div>
        <div className="card-selled">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-title">MacBook Pro 13</p>
            <h3 className="text-subtitle">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </h3>
            <span className="text-price">$1,299.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelledItems;
