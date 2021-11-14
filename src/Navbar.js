import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Smart Parking Demo</h1>
      <div className="nav-menue">
        <Link to="/" className="nav-hover-item">
          Home
        </Link>
        <Link to="/distance" className="nav-hover-item">
          Distance Sensor
        </Link>
        <Link to="/camera" className="nav-hover-item">
          Object Detection
        </Link>
        <Link to="/car-records" className="nav-hover-item">
          Vehicle Records
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
