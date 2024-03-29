import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { useAppSelector } from "../hooks/useStore";
import {
  DeleteIcon,
  EditIcon,
  UserOfflineIcon,
  UserOnlineIcon,
  UsersIcon,
} from "./Icons";

import { useUserActions } from "../hooks/useUserActions";

function ListOfUsers() {
  const users = useAppSelector((state) => state.users);

  const { removeUserFromHook } = useUserActions();

  return (
    <Card className="rounded-md">
      <UsersIcon />
      <Text className="text-tremor-content-strong  dark:text-dark-tremor-content-strong font-semibold ">
        Users: {users.length}
      </Text>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="text-lg text-indigo-600">
              ID
            </TableHeaderCell>
            <TableHeaderCell className="text-lg text-indigo-600">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-lg text-indigo-600">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-lg text-indigo-600">
              Online
            </TableHeaderCell>
            <TableHeaderCell className="text-lg text-indigo-600">
              Actions:
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            const checkStatusUser = user.status;

            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <div className="flex gap-3 items-center">
                    <img
                      className="rounded-full border-2 border-indigo-600 h-10 w-10 object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out "
                      src={`https://unavatar.io/github/${user.github}/`}
                    />
                    {user.name}
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {checkStatusUser ? <UserOnlineIcon /> : <UserOfflineIcon />}
                </TableCell>

                <TableCell>
                  <div className="flex gap-2">
                    <button>
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        removeUserFromHook(user.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ListOfUsers;
