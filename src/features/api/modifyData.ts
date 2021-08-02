import { getUserData } from "./githubApi";

async function modifyData(username: string) {
  const arrayOfProjects: object[] = [];
  const arrayOfOrgs: object[] = [];
  const data: any = await getUserData(username);
  data.repos.forEach((project: { name: string; html_url: string }) =>
    arrayOfProjects.push({
      name: project.name,
      link: project.html_url,
    })
  );
  data.orgs.forEach((org: { login: string; url: string }) =>
    arrayOfOrgs.push({
      name: org.login,
      link: org.url,
    })
  );
  const userInfo: {
    avatar: string;
    bio: string;
    created: string;
    followers: number;
    following: number;
    link: string;
  } = {
    avatar: data.user.avatar_url,
    bio: data.user.bio,
    created: data.user.created_at,
    followers: data.user.followers,
    following: data.user.following,
    link: data.user.url,
  };
  const userName: string = data.user.login;
  const id: number = data.user.id;

  const userProfile: {
    user: object;
    orgs: object[];
    repos: object[];
    name: string;
    id: number;
  } = {
    user: userInfo,
    orgs: arrayOfOrgs,
    repos: arrayOfProjects,
    name: userName,
    id: id,
  };

  console.log(userProfile);
  return userProfile;
}
export { modifyData };
