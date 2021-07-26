import React, { useEffect, useState } from "react";

function SideBarPopularContent(props) {
  const [webSites, setWebSites] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/webpages/most-popular-websites")
      .then((response) => {
        if (!response.ok) {
          alert("Failed while retrieving popular websites");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWebSites(data);
      });
  }, []);

  function handleBtnClick(webSite) {
    props.onSelectCard(webSite)
  }

  return (
    <div
      class="
            col-3
            bg-white
            h-100
            justify-content-center
            "
      style={{ "max-width": "380px" }}
    >
      <div class="row mb-3">
        <div class="col">
          <p class="h3 text-center">Popular Web Sites</p>
          <hr />

          {webSites &&
            webSites.map((webSite) => (
              <div class="rounded list-group list-group-flush">
                <button
                  onClick={() => handleBtnClick(webSite)}
                  className="
                list-group-item list-group-item-action
                active
                py-3
                lh-tight
                mb-1
              "
                  aria-current="true"
                >
                  <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{webSite.title}</strong>
                  </div>
                  <div class="col-10 mb-1 small">{webSite.description}</div>
                </button>
              </div>
            ))}
        </div>
      </div>
      <hr />
      {/* <div class="row">
        <div class="col">
          <div class="card border border-info shadow-0 mb-3">
            <div class="card-header text-center">Popular Tags</div>
            <div class="card-body">
              <h5 class="card-title">Info card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SideBarPopularContent;
