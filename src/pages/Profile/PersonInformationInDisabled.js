import styles from "./Profile.module.css";

function PersonInformationInDisabled(props) {

    const userInfo = props.userInfo;

  return (
    <div className={`${styles.card} ${styles.mb3}`}>
      <div className={styles.cardBody}>
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo && `${userInfo.firstName} ${userInfo.lastName}`}</div>
          </div>
        </div>
        {/* <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo.email && userInfo.email}</div>
          </div>
        </div> */}
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Age</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo && userInfo.age}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Education Level</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo && userInfo.eduLevel && `${userInfo.eduLevel.substring(0,1)}${userInfo.eduLevel.substring(1).toLowerCase()}`}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Occupation</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo && userInfo.occupation}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Gender</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <div>{userInfo && userInfo.gender}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info "
              target="__blank"
              onClick={props.onEditClick}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInformationInDisabled;
