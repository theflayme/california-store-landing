import Phone from "@shared/assets/images/png/catagory/Phone.png";
import "./style.scss";

const Category = () => {
  return (
    <>
      <div className="category-header">
        <h2 className="category-title">Shop by Category</h2>
        <p className="category-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="category-grid">
        {/* LAPTOP CARD */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-type">Laptops</p>
            <h3 className="text-title">True Laptop Solution</h3>
          </div>
        </div>

        {/* PHONES */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-type">Phones</p>
            <h3 className="text-title">Your day to day life</h3>
          </div>
        </div>

        {/* TABLET */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />

          <div className="text">
            <p className="text-type">Tablet</p>
            <h3 className="text-title">Empower your work</h3>
          </div>
        </div>

        {/* WATCH */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text-type">Watch</p>
            <h3 className="text-title">Not just stylish</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
