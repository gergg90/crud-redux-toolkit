import { createUser, deleteUsersById, UserId } from "../store/users/usersSlice";
import { useAppDistpach } from "./useStore";

export const useUserActions = () => {
  const dispatch = useAppDistpach();

  const createUserFromHook = ({ name, email, github, status }) => {
    dispatch(createUser({ name, email, github, status }));
  };

  const removeUserFromHook = (id: UserId) => {
    dispatch(deleteUsersById(id));
  };

  return { removeUserFromHook, createUserFromHook };
};
