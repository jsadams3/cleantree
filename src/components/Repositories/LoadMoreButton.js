import { hot } from "react-hot-loader/root";
import React from "react";
import Loader from "react-loader-spinner";

const LoadMoreButton = ({ fetchMore, endCursor, loading }) => {
  if (loading) {
    return <Loader type="Oval" color="#B3CBFF" height={32} width={32} />;
  }
  return (
    <button
      className="button search-button"
      onClick={() =>
        fetchMore({
          variables: {
            after: endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.search.edges;
            const pageInfo = fetchMoreResult.search.pageInfo;
            return {
              search: {
                __typename: previousResult.search.__typename,
                edges: [...previousResult.search.edges, ...newEdges],
                pageInfo,
              },
            };
          },
        })
      }
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
