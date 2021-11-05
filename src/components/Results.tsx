import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Loading } from "./Loading";
import { ResultsData } from "../types/data-type";
import { useGlobalContext } from "../context/GlobalContext";

export const Results: React.FC = () => {
  const { loading, results, searchTerm, fetchResults, setSearchTerm }: any =
    useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    fetchResults("/search/q=JavaScript Mastery&num=40");
  }, [fetchResults]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map((item: ResultsData, index: number) => {
            const { link, title } = item;
            return (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                    {title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );

    case "/images":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          <h1>Images Results</h1>
        </div>
      );

    case "/news":
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
