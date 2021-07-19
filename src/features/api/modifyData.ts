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
    name: string;
    id: number;
    avatar: string;
    bio: string;
    created: string;
    followers: number;
    following: number;
    link: string;
  } = {
    name: data.user.login,
    id: data.user.id,
    avatar: data.user.avatar_url,
    bio: data.user.bio,
    created: data.user.created_at,
    followers: data.user.followers,
    following: data.user.following,
    link: data.user.url,
  };

  const userProfile: { user: object; orgs: object[]; repos: object[] } = {
    user: userInfo,
    orgs: arrayOfOrgs,
    repos: arrayOfProjects,
  };

  console.log(userProfile);
  return userProfile;
}
export { modifyData };
