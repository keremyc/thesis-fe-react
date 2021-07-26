import { useRef } from "react";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const history = useHistory();
  const searchTextRef = useRef();

  function handleSearchFormSubmit(event) {
    event.preventDefault();

    const searchText = searchTextRef.current.value;
    history.push(`/home/search?query=${searchText}`);
  }

  return (
    <form
      class="d-flex flex-grow w-50 ms-5 me-5"
      onSubmit={handleSearchFormSubmit}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchTextRef}
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
