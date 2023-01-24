import axios from "axios";

const publicKey = "b165c724d3b1d27a750005e4d1f9963e";

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    apikey: publicKey,
  },
});
