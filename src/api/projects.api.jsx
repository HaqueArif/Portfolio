import axios from "axios";

export const getProjects = async () => {
  return await axios.get(
    "https://portfolio-server-2h6e.vercel.app/api/auth/projectsCollection"
  );
};
