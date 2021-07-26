import SortPanel from "./SortPanel";
import WebsiteCard from "./WebsiteCard";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function WebSiteCards(props) {
  const [webSites, setWebSites] = useState();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sortByParam = searchParams.get("sortBy");

  useEffect(() => {
    if (!props.websites) {
      fetch("http://localhost:8080/api/webpages")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error: Failed To Fetch");
          }
          return response.json();
        })
        .then((data) => {
          setWebSites(data);
        })
        .catch((err) => alert(err.message));
    } else {
      setWebSites(props.websites);
    }
  }, [props.websites]);

  return (
    <div className="col-7 mx-3">
      <SortPanel />
      <hr className="gy-0 p-0" />
      {webSites &&
        []
          .concat(webSites)
          .sort((a, b) => {
            if (sortByParam === "Disliked") {
              return a.numberOfDislikes > b.numberOfDislikes ? -1 : 1;
            } else {
              return a.numberOfLikes > b.numberOfLikes ? -1 : 1;
            }
          })
          .map((site) => (
            <WebsiteCard
              key={site.id}
              onSelect={props.onSelectCard}
              webSiteData={site}
            />
          ))}
    </div>
  );
}

export default WebSiteCards;
