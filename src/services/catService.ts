import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export const getBreeds = async () => {
  const response = await axios.get("/breeds");
  return response.data;
};

export const getBreedById = async (breedId: string) => {
  const response = await axios.get(`/breeds/${breedId}`);
  return response.data;
};

export const searchBreeds = async (query: string) => {
  const response = await axios.get(`/breeds/search`, { params: { q: query } });
  return response.data;
};

export const getImagesByBreedId = async (breedId: string) => {
  const response = await axios.get(`/images/search`, {
    params: { limit: 10, breed_ids: breedId },
  });
  return response.data;
};
