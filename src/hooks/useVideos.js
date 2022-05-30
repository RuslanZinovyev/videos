import { useState, useEffect } from "react";
import youtube from "../api/youtube";

// Custom hook
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchInput,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
