import { Link } from "react-router-dom";

function HeaderRightButtons(props) {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-right">
      <li class="nav-item">
        <Link
          className="ms-2 btn btn-success"
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
      <li class="nav-item">
        <Link
          className="ms-1 btn btn-primary"
          to="/login"
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
}

export default HeaderRightButtons;
