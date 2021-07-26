import { useContext } from "react";
import AuthContext from "../../store/auth-context/AuthContext";

import { Link } from "react-router-dom";

function HeaderRightButtonsLoggedIn(props) {
  const authContext = useContext(AuthContext);

  function handleLogoutButtonClick(event) {
    authContext.logout();
  }

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-right">
      <li class="nav-item">
        <Link className="ms-2 btn btn-success" to="/profile">Edit Profile</Link>
      </li>
      <li class="nav-item">
        <button
          className="ms-2 btn btn-success"
          onClick={handleLogoutButtonClick}
        >
          Log out
        </button>
      </li>
      <li class="nav-item mx-2">
        <img
          src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
          width="40"
          height="40"
          class="rounded-circle"
        />
      </li>
    </ul>
  );
}

export default HeaderRightButtonsLoggedIn;
