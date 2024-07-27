import { LOGO_IMG } from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="nav-outer">
      <div>
        <img src={LOGO_IMG} className="logo-img"></img>
      </div>
      <div className="header-items">
        <span>
          <b>home</b>
        </span>
        <span>
          <b>about us</b>
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span className="log-btn">
          <b>log in</b>
        </span>
      </div>
    </div>
  );
};
