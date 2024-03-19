// 'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from "@tremor/react";

const users: {
  id: string;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    id: "1",
    name: "Germain Gutierrez",
    email: "germain.gg90@gmail.com",
    github: "gergg90",
  },
  {
    id: "2",
    name: "Jess Moreno",
    email: "jess90@gmail.com",
    github: "lajesys",
  },
  {
    id: "3",
    name: "Chimuelito Care verga",
    email: "elchimu@gmail.com",
    github: "chumueloidecareverga",
  },
  {
    id: "4",
    name: "Pelusa",
    email: "pelujita@gmail.com",
    github: "lapelu",
  },
];

export default function ListOfUsers() {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Usuarios
          </h3>
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
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Github
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {user.id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.github}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
