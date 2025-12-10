// modules/library/api/authorApi.js
import axios from "axios";

export const authorApi = axios.create({
  baseURL: "http://localhost:5000/api/authors",
  headers: {
    "Content-Type": "application/json"
  }
});
