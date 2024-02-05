import axios from "axios";

const baseURL = "https://reqres.in/";

const axiosInstance = axios.create({
  baseURL,
});

const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

const post = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

export { get, post };
