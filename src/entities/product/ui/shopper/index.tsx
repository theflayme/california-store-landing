import "./style.scss";

import ShopperIcon from "@shared/assets/images/icons/Shopper.svg?react";

const Shopper = () => {
  return (
    <div className="shopper-container">
      <button>
        <ShopperIcon className="icon-btn" />
      </button>
    </div>
  );
};
export default Shopper;
