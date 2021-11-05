import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

export const Results: React.FC = () => {
  const { loading, results, searchTerm, fetchResults, setSearchTerm }: any =
    useGlobalContext();

  const location = useLocation();

  console.log({
    results,
    loading,
  });

  useEffect(() => {
    fetchResults("/search/q=JavaScript Mastery&num=40");
  }, [fetchResults]);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          <h1>Search Results</h1>
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          <h1>Images Results</h1>
        </div>
      );

    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          <h1>News Result</h1>
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          <h1>Videos Result</h1>
        </div>
      );

    default:
      return (
        <div>
          <h1>Error!</h1>
        </div>
      );
  }
};
