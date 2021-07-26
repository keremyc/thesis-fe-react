import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context/AuthContext";

function SideBarProfile(props) {
  const authContext = useContext(AuthContext);
  const [authorizedUser, setAuthorizedUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${authContext.username}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        return response.json();
      })
      .then((data) => {
        setAuthorizedUser(data);
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [authContext]);

  return (
    <div class="col-2 h-100 me-3">
      <div class="row mb-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <p>
              <img
                class="img-fluid"
                src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                alt="card image"
              />
            </p>
            <h4 class="card-title">
              {authorizedUser && authorizedUser.firstName}
            </h4>
            <p class="card-text">
              {authorizedUser && authorizedUser.occupation}
              <br />
              {authorizedUser && authorizedUser.eduLevel}
            </p>
            <Link to="/profile" class="btn btn-primary btn-sm">
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <h4 class="card-title">Interests</h4>
            <p className="card-text">
              Information Technologies <br />
              Computer Engineering <br />
              Java <br />
              Spring <br />
              REST APIs <br />
            </p>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="card bg-light">
          <div class="card-body text-center">
            <h4 class="card-title">Your Last Searches</h4>
            <p className="card-text">
              Search #1 <br />
              Search #2 <br />
              Search #3 <br />
              Search #4 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarProfile;
