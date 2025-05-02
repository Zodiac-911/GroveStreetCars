import "../styles/topbar.css";
import gtaIII from "../assets/gta3.png";
import gtavc from "../assets/gtavc.png";
import gtasa from "../assets/gtasa.png";
import gtav from "../assets/gtav.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>

      <div className="navbar">
        <Link to="/gta3">
          <button>
            <img src={gtaIII} className="gta3" alt="GTA III" />
          </button>
        </Link>
        <Link to="/gtavc">
          <button>
            <img src={gtavc} alt="GTA VC" />
          </button>
        </Link>
        <Link to="/gtasa">
          <button>
            <img src={gtasa} alt="GTA SA" />
          </button>
        </Link>
        <Link to="/gtav">
          <button>
            <img src={gtav} className="gtav" alt="GTA V" />
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Topbar;
