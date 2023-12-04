import { useState } from "react";
import { createTweetApi, deleteTweetApi, getTweetsApi } from "../services/api";
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
      await deleteTweetApi(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const createTweet = async (content) => {
    try {
      setLoading(true);
      await createTweetApi(content);
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
    createTweet,
  };
}
