import { useEffect, useContext, useState } from "react";
import AuthContext from "../../store/auth-context/AuthContext";

import WebSiteCards from "./WebSites/WebSiteCards";

function MyRecommendations(props) {
  const auth = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${auth.username}/recs`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("Failed while retrieving recommendations");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecommendations(data);
      });
  }, []);

  function getWebPages(recommendations) {
    let webPages = [];
    if (recommendations) {
      recommendations.map((rec) => {
        webPages.push(rec.recommendedWebPage);
      });
    }
    console.log("webpages:" + webPages);
    return webPages;
  }

  return (
    <>
      {
        <WebSiteCards
          websites={getWebPages(recommendations)}
          onSelectCard={props.onSelectCard}
        />
      }
    </>
  );
}

export default MyRecommendations;
