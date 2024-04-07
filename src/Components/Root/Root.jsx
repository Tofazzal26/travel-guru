import Navbar from "../Navbar/Navbar";
import bannerImg from "../../assets/images/Rectangle 1.png";
const Root = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)),url(${bannerImg})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Root;
