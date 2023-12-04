export const getTweetsApi = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
};

export const deleteTweetApi = async (id) => {
  const url = import.meta.env.VITE_API_URL + "/" + id;
  const params = {
    method: "DELETE",
  };
  const response = await fetch(url, params);
  const result = await response.json();
  return result;
};

export const createTweetApi= async (content) => {
  const url = import.meta.env.VITE_API_URL;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  };
  const response = await fetch(url, params);
  const result = await response.json();
  return result;
};
