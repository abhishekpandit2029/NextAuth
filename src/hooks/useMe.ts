import { useGetQuery } from "@/lib/fetcher";

interface IUser {
  data: {
    username: string;
    email: string;
  }
}

export default function useMe() {
  const { data: userData, isLoading } = useGetQuery<IUser>("/users/me");
  return { userData, isLoading };
};
