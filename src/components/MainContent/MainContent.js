import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context/AuthContext";
import TopButtons from "./TopButtons";
import HomeContent from "./HomeContent";

import { Route } from "react-router-dom";

function MainContent(props) {
  const authContext = useContext(AuthContext);

  return (
    <div className="container mt-3 col">
      {authContext.isAuthenticated && <TopButtons />}
      <HomeContent />
    </div>
  );
}

export default MainContent;
