import "../styles/pages.css";
import { Link } from "react-router-dom";
import Xx from "../assets/x-symbol-svgrepo-com.svg";

function Login() {
  return (
    <>
      <div className="background-login">
        <div className="login-container">
          <Link className="close-login" to="/">
            ⛌
          </Link>
          <form action="login">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
          <div className="space"></div>
          <label className="sngn" htmlFor="singin">
            You do not have an account?{" "}
            <span>
              <a href="">Sing in</a>
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
export default Login;
