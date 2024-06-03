import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./projects.api";

export const useGetProjects = () => {
  const data = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return data;
};
