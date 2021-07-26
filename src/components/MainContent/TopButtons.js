import { Route, useHistory } from "react-router-dom";

function TopButtons(props) {
  const history = useHistory();

  function handleRecommendationBtnClick() {
    history.push("/home/recs");
  }

  function handleFavoritesBtnClick() {
    history.push("/home/favorites");
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <Route exact path="/home/recs">
          <p className="h3">Your Recommendations</p>
        </Route>
        <Route exact path="/home/favorites">
          <p className="h3">Your Favorites</p>
        </Route>
        <Route exact path="/home/search">
          <p className="h3">Search Results</p>
        </Route>
        <Route exact path="/home">
          <p className="h3">All Websites</p>
        </Route>
      <div>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={handleRecommendationBtnClick}
        >
          My Recommendations
        </button>
        <button
          className="btn btn-outline-dark mx-1"
          onClick={handleFavoritesBtnClick}
        >
          My Favorites
        </button>
        </div>
      </div>
      <hr class="p-0" />
    </>
  );
}

export default TopButtons;
