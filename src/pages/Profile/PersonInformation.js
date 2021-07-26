import { useRef } from "react";
import styles from "./Profile.module.css";

function PersonInformation(props) {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const eduLevelRef = useRef();
  const occupationRef = useRef();
  const genderRef = useRef();

  function handleSaveBtnClick(event) {
    const fullName = fullNameRef.current.value;
    const nameArray = fullName.split(" ");
    console.log(nameArray);

    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const eduLevel = eduLevelRef.current.value;
    const occupation = occupationRef.current.value;
    const gender = genderRef.current.value;

    props.onSaveClick({
      firstName: nameArray[0],
      lastName: nameArray[1],
      age: age,
      email: email,
      eduLevel: eduLevel,
      occupation: occupation,
      gender: gender,
    });
  }

  return (
    <div className={`${styles.card} ${styles.mb3}`}>
      <div className={styles.cardBody}>
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input type="text" required ref={fullNameRef} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input type="text" ref={emailRef} required />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Age</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input type="number" min="0" ref={ageRef} required />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Education Level</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <select id="cars" ref={eduLevelRef}>
              <option value="HIGH_SCHOOL">High School</option>
              <option value="BACHELOR">Bachelor</option>
              <option value="MASTER">Master</option>
              <option value="DOCTORAL">Doctoral</option>
            </select>
            {/* <input type="text" ref={eduLevelRef} /> */}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Occupation</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input type="text" ref={occupationRef} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Gender</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input type="text" ref={genderRef} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info "
              target="__blank"
              onClick={handleSaveBtnClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInformation;
