import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  username: "",
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({
    token: "",
    username: "",
    isAuthenticated: false,
  });
  const history = useHistory();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (storedToken && username) {
      setAuthState({ token: storedToken, isAuthenticated: true, username: username });
    }
  }, []);

  function loginHandler(authToken, username) {
    setAuthState({
      token: authToken,
      isAuthenticated: true,
      username: username,
    });
    localStorage.setItem("token", authToken);
    localStorage.setItem("username", username);
  }

  function logoutHandler() {
    setAuthState({ token: "", isAuthenticated: false, username: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/home");
  }

  const authContext = {
    token: authState.token,
    username: authState.username,
    isAuthenticated: authState.isAuthenticated,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
