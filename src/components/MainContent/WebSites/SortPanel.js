import SortButton from "./SortButton";

import styles from "./css/SortPanel.css";

function SortPanel(props) {
  return (
    <div
      className="d-flex justify-content-end mt-3 mb-2"
    >
      <SortButton title="Created" />
      <SortButton title="Liked" />
      <SortButton title="DisLiked" />
    </div>
  );
}

export default SortPanel;
