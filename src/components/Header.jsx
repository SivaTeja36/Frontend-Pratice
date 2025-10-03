import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, updateButtonName] = useState("Login out");
  return(
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login out" ? updateButtonName("Login") : updateButtonName("Login out")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
