import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-f0ac9.cloudfunctions.net/api",
});

// https://us-central1-challenge-f0ac9.cloudfunctions.net/api
// http://localhost:5001/challenge-f0ac9/us-central1/api

export default instance;
