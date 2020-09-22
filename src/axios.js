import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/challenge-f0ac9/us-central1/api",
  // "http://localhost:5001/challenge-f0ac9/us-central1/api",
});

export default instance;
