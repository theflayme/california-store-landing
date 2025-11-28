import Phone from "@shared/assets/images/png/catagory/Phone.png";
import "./style.scss";

const Category = () => {
  return (
    <>
      <div className="category-header">
        <h2 className="category-header__title">Shop by Category</h2>
        <p className="category-header__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="category-grid">
        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text__type">Laptops</p>
            <h3 className="text__title">True Laptop Solution</h3>
          </div>
        </div>

        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text__type">Phones</p>
            <h3 className="text__title">Your day to day life</h3>
          </div>
        </div>

        {/* TABLET */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />

          <div className="text">
            <p className="text__type">Tablet</p>
            <h3 className="text__title">Empower your work</h3>
          </div>
        </div>

        {/* WATCH */}
        <div className="card-category">
          <img src={Phone} alt="Phones" />
          <div className="text">
            <p className="text__type">Watch</p>
            <h3 className="text__title">Not just stylish</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
