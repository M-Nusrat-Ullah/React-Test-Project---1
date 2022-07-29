import "./Logo.css";
import logo from "./logo.svg";

function LogoTop() {
  return (
    <div className="logo1">
      <img src={logo} className="imageLogo" alt="logo of company"></img>
    </div>
  );
}

export default LogoTop;
