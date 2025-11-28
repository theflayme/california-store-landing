import Catagory from "@widgets/catagory";
import Slider from "@widgets/mainSlider";
import SelledItems from "../../widgets/selledItems";
import BestItems from "../../widgets/bestItems";

const Home = () => {
  return (
    <>
      <Slider />
      <Catagory />
      <SelledItems />
      <BestItems />
    </>
  );
};

export default Home;
