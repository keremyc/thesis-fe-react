import { useContext } from "react";
import AuthContext from "../../store/auth-context/AuthContext";
import HeaderLeftButtons from "./HeaderLeftButtons";
import HeaderRightButtons from "./HeaderRightButtons";
import HeaderRightButtonsLoggedIn from "./HeaderRightButtonsLoggedIn";
import SearchBar from "./SearchBar";

function Header(props) {
  const authContext = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <HeaderLeftButtons />
          <SearchBar />
          {authContext.isAuthenticated && <HeaderRightButtonsLoggedIn />}
          {!authContext.isAuthenticated && <HeaderRightButtons />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
