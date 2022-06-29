import { create } from "apisauce";

const API = create({
  baseURL: "http://www.omdbapi.com/",
});

const getFilmsListApi = ({ search = "all", page = 1 }) => {
  return API.get("", {
    s: search,
    page,
    apikey: "ceb908f",
  });
};

export { getFilmsListApi };
