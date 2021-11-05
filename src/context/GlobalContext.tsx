import React, {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";
import { ResponseData } from "../types/data-type";

const StateContext = createContext({});
const baseUrl: string = "https://google-search3.p.rapidapi.com/api/v1";

interface Props {
  children: ReactNode;
}

export const StateProvider = ({ children }: Props) => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ResponseData>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchResults = useCallback(async (path: string) => {
    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}${path}`, {
        method: "GET",
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "US",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key":
            "6d0a2dc270mshe9cc297632fb8cfp13a548jsn44fd6a2bd2a3",
        },
      });

      if (!response.ok && response.status > 300) {
        setError(
          "something is wrong with the connection!, please check your connection"
        );
      }

      const data = await response.json();

      if (Object.keys(data).length > 0) {
        setLoading(false);
        setResults(data);
      }
    } catch (error: TypeError | any) {
      setLoading(false);
      setError(`${error.message}: something went wrong!`);
      throw new Error(error);
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        error,
        loading,
        results,
        searchTerm,
        fetchResults,
        setSearchTerm,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
