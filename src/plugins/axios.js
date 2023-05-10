import axios from "axios";

const ax = axios.create({
  baseURL: "https://random-data-api.com/api/v2/",
  timeout: 2000,
  params: {
    "size": 1,
    "response_type": "json"
  },
  headers: {
    "accept": "application/json",
  }
})

export default ax
