import { create } from "apisauce";

const API = create({
  baseURL: "http://www.omdbapi.com/",
});

const getFilmsListApi = ({ search = "all" }) => {
  return API.get("", {
    s: search,
    page: 2,
    limit: 3,
    apikey: "ceb908f",
  });
};

export { getFilmsListApi };
