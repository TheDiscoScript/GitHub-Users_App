import axios from "axios";

const BASE_URL = "https://api.github.com";

function getUserData(username: any) {
  try {
    return axios
      .all([
        axios.get(`${BASE_URL}/users/${username}`),
        axios.get(`${BASE_URL}/users/${username}/orgs`),
        axios.get(`${BASE_URL}/users/${username}/repos?per_page=250`),
      ])
      .then(([user, orgs, repos]) => ({
        user: user.data,
        orgs: orgs.data,
        repos: repos.data,
      }));
  } catch (error) {
    console.log("Error in getUserData: ", error);
  }
}

export { getUserData };
