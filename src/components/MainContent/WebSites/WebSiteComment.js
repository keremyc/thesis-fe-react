import './css/WebSiteComment.css';

function WebSiteComment(props) {
  return (
    <div class="card mx-auto mb-2">
      <div class="row g-0">
        <div class="liked-specifier"></div>
        <div class="col-2 mb-3 mt-3 comment-right-border">
          <div className="row p-3">
            <img
              width="20"
              alt="..."
              src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
            />
          </div>
          <div className="row text-center">
            <p>{props.commentData.recommendedBy.firstName}</p>
          </div>
        </div>

        <div class="col-10">
          <div class="card-body">
            <h5 class="card-title">{
              props.commentData.liked ? "Liked" : "Disliked" 
            }</h5>
            <p class="card-text">
              {props.commentData.recommendationText}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated At {props.commentData.createdAt}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSiteComment;
