import axios from "axios";

export const fetchImages = async <T extends { results: unknown }>(
  query: string,
  page: number,
  signal: AbortSignal
): Promise<T["results"]> => {
  const response = await axios.get<T>(
    `https://api.unsplash.com/search/photos?client_id=kbNMpqpgQKcM6257UPWVgnujd2LLxXnX-aERU4FNHUs&query=${query}&page=${page}`,
    { signal }
  );
  return response.data.results;
};
