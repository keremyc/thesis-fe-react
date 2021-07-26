import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context/AuthContext";

function Signup() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  function handleSignupFormSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration Failed");
        } else {
          window.$("#ModalSignupForm").modal("hide");
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    history.push("/login");
  }

  if (auth.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="row justify-content-center mt-5">
      <aside className="col-sm-4">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Sign up!</h4>
            <hr />
            <form onSubmit={handleSignupFormSubmit}>
              <div className="form-group mb-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </span>
                  </div>
                  <input
                    ref={emailRef}
                    name=""
                    className="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
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
                    placeholder="Username"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </span>
                  </div>
                  <input
                    ref={firstNameRef}
                    name=""
                    className="form-control"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group mb-2">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </span>
                  </div>
                  <input
                    ref={lastNameRef}
                    name=""
                    className="form-control"
                    placeholder="Last Name"
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
                  Sign up
                </button>
              </div>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
}

export default Signup;
