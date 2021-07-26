import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";

import AuthContext from "../../store/auth-context/AuthContext";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

function Login() {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleloginFormSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("UnSuccessfull");
        }

        return response.json();
      })
      .then((data) => {
        authContext.login(data.token, data.username);
      })
      .catch((err) => alert(err.message));

    history.push("/home");
  }

  if (authContext.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="row justify-content-center mt-5">
      <aside className="col-sm-4">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
            <hr />
            <form onSubmit={handleloginFormSubmit}>
              <div className="form-group mb-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </span>
                  </div>
                  <input
                    ref={usernameRef}
                    name=""
                    className="form-control"
                    placeholder="Email or login"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} size="2x" />
                    </span>
                  </div>
                  <input
                    ref={passwordRef}
                    className="form-control"
                    placeholder="*********"
                    type="password"
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
              <p className="text-center">
                <a href="#" class="btn">
                  Forgot password?
                </a>
              </p>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
}

export default Login;
