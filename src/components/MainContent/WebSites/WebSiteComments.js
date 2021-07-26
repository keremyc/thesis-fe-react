import React, { useEffect, useState } from "react";
import WebSiteComment from "./WebSiteComment";

function WebSiteComments(props) {
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/api/webpages/${props.for.id}/recs`)
      .then((response) => {
        if (!response.ok) {
          alert("Failed while retrieving recommendations");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data)
        setRecommendations(data);
      });
  }, [props.for]);

  return (
    <React.Fragment>
      {recommendations &&
        recommendations.map((rec) => <WebSiteComment commentData={rec} />)}
    </React.Fragment>
  );
}

export default WebSiteComments;
