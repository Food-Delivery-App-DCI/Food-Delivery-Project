import "../style/CarLoader.css";
import carImage from "../../assets/car-loader.png"; // Import your car image

const CarLoader = () => {
  return (
    <div className="car-loader-container">
      {/* Dots following the car */}
      {/* <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div> */}

      <img src={carImage} alt="Car" className="car" />
    </div>
  );
};

export default CarLoader;
