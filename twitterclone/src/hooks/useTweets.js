import { useState } from "react";

import { getTweetsApi } from "../services/api";
export function useTweets() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTweets = async () => {
    try {
      setLoading(true);
      const res = await getTweetsApi();
      setLoading(false);
      setData(res);
    } catch (error) {
      setLoading(false);
    }
  };
  const deleteTweet = async (id) => {
    try {
      setLoading(true);
      await deleteTweet(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    getTweets,
    deleteTweet,
  };
}



