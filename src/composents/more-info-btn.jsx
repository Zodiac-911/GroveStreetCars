import "../styles/cards.css";
import { Link } from "react-router-dom";

function MoreInfoBtn() {
  return (
    <>
      <Link to="/login">
        <button className="more-info-btn">More info</button>
      </Link>
    </>
  );
}
export default MoreInfoBtn;
