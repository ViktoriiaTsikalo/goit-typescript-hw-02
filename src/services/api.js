import axios from "axios";

export const fetchImages = async (query, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=kbNMpqpgQKcM6257UPWVgnujd2LLxXnX-aERU4FNHUs&query=${query}&page=${page}`,
    { signal }
  );
  return response.data.results;
};
