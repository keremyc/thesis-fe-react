import SideBarPopularWebsites from "./SideBarPopularWebsites";
import SideBarProfile from "./SideBarProfil/SideBarProfile";
import WebSiteCards from "./WebSites/WebSiteCards";
import WebSiteDetail from "./WebSites/WebSiteDetail";
import SearchResults from "./SearchResults";
import MyFavorites from "./MyFavorites";

import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context/AuthContext";
import { Route } from "react-router-dom";
import MyRecommendations from "./MyRecommendations";

function DefaultHomeContent(props) {
  const [webSiteSelected, setWebSiteSelected] = useState();
  const authContext = useContext(AuthContext);

  function handleWebSiteSelectedChange(website) {
    setWebSiteSelected(website);
  }

  return (
    <div className="d-flex justify-content-center mt-2">
      {authContext.isAuthenticated && <SideBarProfile />}
      {webSiteSelected ? (
        <WebSiteDetail
          webSite={webSiteSelected}
          onBack={handleWebSiteSelectedChange}
        />
      ) : (
        <React.Fragment>
          <Route exact path="/home">
            <WebSiteCards onSelectCard={handleWebSiteSelectedChange} />
          </Route>
          <Route exact path="/home/search">
            <SearchResults onSelectCard={handleWebSiteSelectedChange} />
          </Route>
          <Route exact path="/home/favorites">
            <MyFavorites onSelectCard={handleWebSiteSelectedChange} />
          </Route>
          <Route exact path="/home/recs">
            <MyRecommendations onSelectCard={handleWebSiteSelectedChange} />
          </Route>
        </React.Fragment>
      )}
      <SideBarPopularWebsites onSelectCard={handleWebSiteSelectedChange} />
    </div>
  );
}

export default DefaultHomeContent;
