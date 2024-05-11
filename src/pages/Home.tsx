import About from "../components/ui/Home/About";
import Banner from "../components/ui/Home/Banner";
import Gallery from "../components/ui/Home/Gallery";
import ReliefGoods from "../components/ui/Home/ReliefGoods";
import Testimonial from "../components/ui/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ReliefGoods></ReliefGoods>
      <Testimonial></Testimonial>
      <Gallery></Gallery>
      <About></About>
    </div>
  );
};

export default Home;
