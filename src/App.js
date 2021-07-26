import "./App.css";
import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";
import AuthContext, {
  AuthContextProvider,
} from "./store/auth-context/AuthContext";
import { Redirect, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

function App() {
  const auth = useContext(AuthContext);


  return (
    <AuthContextProvider>
      <Header />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/home" >
        <MainContent />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
