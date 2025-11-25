import "./style.scss";

import SearchIcon from "@shared/assets/images/icons/Search.svg?react";

const Search = () => {
  return (
    <div className="search-container">
      <button>
        <SearchIcon className="icon-btn" />
      </button>
    </div>
  );
};
export default Search;
