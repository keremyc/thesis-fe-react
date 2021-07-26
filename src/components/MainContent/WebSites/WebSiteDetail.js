import WebSiteComments from "./WebSiteComments";
import WebsiteCard from "./WebsiteCard";
import AddRecommendationModal from "../../AddRecommendationModal";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../store/auth-context/AuthContext";

import { useContext } from "react";

function WebSiteDetail(props) {
  const authContext = useContext(AuthContext);

  function handleBackBtnClick(event) {
    props.onBack(undefined);
  }
  const addRecommendationPortal = document.getElementById("add-rec-modal");

  return (
    <div className="col-7 mx-3">
      {ReactDOM.createPortal(
        <AddRecommendationModal currentWebsite={props.webSite} />,
        addRecommendationPortal
      )}
      <div
        className="d-flex flex-row justify-content-between mb-3"
        style={{ height: "50px" }}
      >
        <button className="btn btn-outline-dark" onClick={handleBackBtnClick}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        {authContext.isAuthenticated && (
          <button
            className="btn btn-outline-dark"
            data-toggle="modal"
            data-target="#AddRecommendationModal"
          >
            New Recommendation
          </button>
        )}
      </div>

      <WebsiteCard webSiteData={props.webSite} onSelect={() => {}} />
      <hr />
      <WebSiteComments for={props.webSite} />
    </div>
  );
}

export default WebSiteDetail;
