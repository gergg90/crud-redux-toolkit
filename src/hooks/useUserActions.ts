import { deleteUsersById, UserId } from "../store/users/usersSlice";
import { useAppDistpach } from "./useStore";

export const useUserActions = () => {
  const dispatch = useAppDistpach();

  const removeUser = (id: UserId) => {
    dispatch(deleteUsersById(id));
  };

  return { removeUser };
};
