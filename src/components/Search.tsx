import React from "react";
import { useDebounce } from "use-debounce/lib";
import { useState, useEffect } from "react";

import { Links } from "./Links";
import { useGlobalContext } from "../context/GlobalContext";

export const Search: React.FC = () => {
  const { setSearchTerm }: any = useGlobalContext();
  const [text, setText] = useState<string>("Islam Makachev");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
      />

      {text !== "" ? (
        <button
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
          type="button"
        >
          x
        </button>
      ) : null}
      <Links />
    </div>
  );
};
