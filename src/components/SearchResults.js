import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types"

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No Results</p>;
  } else {
  return (
    <>
      <div className="result-images">
        {results.map((image) => (
            <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
    </>
  );
  };
}
SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
