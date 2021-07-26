import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import "./css/WebsiteCard.css";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context/AuthContext";
import { Route, Switch } from "react-router-dom";

function WebsiteCard(props) {
  const auth = useContext(AuthContext);

  function handleCardClick(event) {
    props.onSelect(props.webSiteData);
  }

  const classes = "card shadow mx-auto rounded mb-3";
  if (props.clikable === false) {
    classes = classes + " not-active";
  }

  async function handleAddToFavorites(e) {
    const response = await fetch(
      `http://localhost:8080/api/users/${auth.username}/favs/${props.webSiteData.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );

    if (response.ok) {
      alert("Success!");
    } else {
      alert("Failed!");
    }
  }

  async function handleRemoveRecommendation(e) {
    const response = await fetch(
      `http://localhost:8080/api/users/${auth.username}/recs/${props.webSiteData.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );

    if (response.ok) {
      alert("Success!");
    } else {
      alert("Failed!");
    }
  }


  async function handleRemoveFavorite(e) {
    const response = await fetch(
      `http://localhost:8080/api/users/${auth.username}/favs/${props.webSiteData.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );

    if (response.ok) {
      alert("Success!");
    } else {
      alert("Failed!");
    }
  }

  return (
    <div class="card shadow mx-auto rounded mb-3">
      <div class="row g-0">
        <div class="col">
          <div class="card-body" onClick={handleCardClick}>
            <h5 class="card-title">{props.webSiteData.title}</h5>
            <p class="card-text">{props.webSiteData.description}</p>
            <p class="card-text">
              <small class="text-muted">
                Last updated {props.webSiteData.lastUpdated} mins ago
              </small>
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div>
              <a
                className="btn btn-sm btn-outline-dark me-1"
                href={props.webSiteData.url}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" />
                Visit
              </a>
              {auth.isAuthenticated && (
                <>
                  <Switch>
                    <Route exact path="/home/recs">
                      <a
                        className="btn btn-sm btn-outline-dark me-1"
                        onClick={handleRemoveRecommendation}
                      >
                        <FontAwesomeIcon icon={faBookmark} className="me-2" />
                        Remove
                      </a>
                    </Route>
                    <Route exact path="/home/favorites">
                      <a
                        className="btn btn-sm btn-outline-dark me-1"
                        onClick={handleRemoveFavorite}
                      >
                        <FontAwesomeIcon icon={faBookmark} className="me-2" />
                        Remove
                      </a>
                    </Route>
                    <Route path="*">
                      <a
                        className="btn btn-sm btn-outline-dark me-1"
                        onClick={handleAddToFavorites}
                      >
                        <FontAwesomeIcon icon={faBookmark} className="me-2" />
                        Add To Favorites
                      </a>
                    </Route>
                  </Switch>
                </>
              )}
            </div>
            <div>
              <div className="ms-2 d-inline">
                <span>{props.webSiteData.numberOfLikes}&nbsp;</span>
                <FontAwesomeIcon icon={faHeart} color="blue" />
              </div>
              <div className="ms-2 d-inline">
                <span>{props.webSiteData.numberOfDislikes}&nbsp;</span>
                <FontAwesomeIcon icon={faHeartBroken} color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
