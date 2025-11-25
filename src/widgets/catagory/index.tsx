import "./style.scss";

import Laptop from "@shared/assets/images/png/catagory/Laptop.png";
import AppleWatch from "@shared/assets/images/png/catagory/AppleWatch.png";

const Catagory = () => {
  return (
    <div className="catagory">
      <div className="catagory-info">
        <h2>Shop our latest offers and categories</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="catagory-blocks">
        <div className="catagory-block-left">
          <div className="block-item-left">
            <img src={Laptop} alt="Laptop category" />
            <p>Laptops</p>
            <h2>True Laptop Solution</h2>
          </div>
          <div className="block-item-left">
            <img src={AppleWatch} alt="Watch category" />
            <p>Watches</p>
            <h2>Not just stylisht</h2>
          </div>
        </div>
        <div className="catagory-block-right">
          <div className="block-item-right">
            <img
              className="block-item-img"
              src={Laptop}
              alt="Laptop category"
            />
            <p className="block-item-text">Laptops</p>
            <h2 className="block-item-title">True Laptop Solution</h2>
          </div>
          <div className="block-item-right">
            <img src={Laptop} alt="Laptop category" />
            <p>Laptops</p>
            <h2>True Laptop Solution</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
