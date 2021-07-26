import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SortPanel from "./WebSites/SortPanel";
import WebSiteCards from "./WebSites/WebSiteCards";

function SearchResults(props) {
  const [searchResults, setSearchResults] = useState();

  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const searchText = searchParams.get("query");

  if (!searchText) {
    history.push("/home");
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/search?query=" + searchText)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error: Couldn't perform search operation");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSearchResults(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [searchText]);

  return (
    <>
      {searchResults && (
        <>
          <WebSiteCards
            title={`Search Results For ${searchText}`}
            websites={searchResults}
            onSelectCard={props.onSelectCard}
          />
        </>
      )}
    </>
  );
}

export default SearchResults;
