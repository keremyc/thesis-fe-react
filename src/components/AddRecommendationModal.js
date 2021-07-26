import React, { useContext, useState } from "react";
import AuthContext from "../store/auth-context/AuthContext";

function AddRecommendationModal(props) {
  const [formData, setFormData] = useState({
    liked: false,
    comment: "",
  });
  const authContext = useContext(AuthContext);

  function handleLikedSelect(event) {
    console.log("like Selectged");
    setFormData((prevState) => {
      return { ...prevState, liked: true };
    });
  }

  function handleDislikedSelect(event) {
    console.log("dislike Selectged");

    setFormData((prevState) => {
      return { ...prevState, liked: false };
    });
  }

  function handleCommentChange(event) {
    console.log(event.target.value);
    setFormData((prevState) => {
      return { ...prevState, comment: event.target.value };
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8080/api/recs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authContext.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recommendationText: formData.comment,
        liked: formData.liked,
        recommendedWebPage: props.currentWebsite,
      }),
    }).then(() => {
      window.$("#AddRecommendationModal").modal("hide") 
    });

    setFormData({
      liked: false,
      url: "",
      comment: "",
    });
  }

  return (
    <div id="AddRecommendationModal" className="modal fade">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h1 className="modal-title">New Recommendation</h1>
          </div>
          <div className="modal-body">
            <form role="form" method="POST" onSubmit={handleFormSubmit}>
              <input type="hidden" name="_token" />
              <div className="form-group">
                <div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="liked"
                        onChange={handleLikedSelect}
                      />{" "}
                      Liked
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="liked"
                        onChange={handleDislikedSelect}
                      />{" "}
                      Disliked
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group mt-2">
                <label>Your Comment</label>
                <input
                  type="text"
                  className="form-control input-lg"
                  name="comment"
                  value={formData.comment}
                  onChange={handleCommentChange}
                />
              </div>
              <div className="form-group mt-2">
                <div>
                  <button type="submit" className="btn btn-success">
                    POST
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecommendationModal;
