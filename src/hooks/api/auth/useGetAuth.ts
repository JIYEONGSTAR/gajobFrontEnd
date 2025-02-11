import useSWR from "swr";
import { fetcher } from "lib/api/fetcher";
import { IUserData } from "types";

type IUserType = Omit<IUserData, "id">;
interface IGetUserRequest extends IUserType {
  activated: string;
  authorities: string;
}

function useGetAuth() {
  const { data } = useSWR<IGetUserRequest>("user", fetcher);

  return { data };
}
export default useGetAuth;
