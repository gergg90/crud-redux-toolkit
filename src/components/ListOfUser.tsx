// 'use client';
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import { useAppSelector } from "../hooks/useStore";
import { DeleteIcon, EditIcon } from "./Icons";

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users);

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Esto es un proyecto de como agregar, modificar y eliminar usuarios.
            El proyecto se realizo con react, redux-toolkit como manejador de
            estados, tailwindcss para los estilos y como librearia de
            componentes se utilizo tremor.
          </p>
        </div>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Agregar Usuarios
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Nombre
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Acciones
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Title className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Usuarios:
            <Badge className="m-2 rounded-full bg-indigo-500">
              {users.length}
            </Badge>
          </Title>

          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {user.id}
              </TableCell>
              <TableCell className="flex content-between gap-2 items-center">
                <img
                  className="rounded-full"
                  style={{ height: "32px", width: "32px" }}
                  src={`https://unavatar.io/github/${user.github}`}
                  alt={user.name}
                />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <button type="button">
                  <EditIcon />
                </button>
                <button type="button">
                  <DeleteIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
