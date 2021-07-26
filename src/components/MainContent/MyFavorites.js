import { useEffect, useContext, useState } from "react";
import AuthContext from "../../store/auth-context/AuthContext";
import WebSiteCards from "./WebSites/WebSiteCards";

function MyFavorites(props) {
  const [favoriteWebsites, setFavoriteWebsites] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${auth.username}/favs`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("Error while retrieving favorites");
        }
        return response.json();
      })
      .then((data) => {
        setFavoriteWebsites(data);
      });
  }, [auth.username]);

  return (
    <>
      {favoriteWebsites && (
        <>
          <WebSiteCards
            title={`Your favorite webpages`}
            websites={favoriteWebsites}
            onSelectCard={props.onSelectCard}
          />
        </>
      )}
    </>
  );
}

export default MyFavorites;
