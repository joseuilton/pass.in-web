import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, SearchIcon } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeading } from "./table/table-heading";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { attendees } from "../data/attendees";
import { useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeesList() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(attendees.length / 10);

  function handleGoToFirstPage() {
    setPage(1);
  }

  function handleGoToPreviousPage() {
    setPage((previous) => previous - 1);
  }

  function handleGoToNextPage() {
    setPage((previous) => previous + 1);
  }

  function handleGoToLastPage() {
    setPage(totalPages);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div
          className="min-w-[280px] flex items-center gap-3 px-3 py-1.5 border border-zinc-50/10 
                     rounded-lg"
        >
          <SearchIcon className="size-4 text-emerald-300" />
          <input
            type="search"
            name="search-attendee"
            id="search-attendee"
            placeholder="Buscar participante..."
            className="p-0 text-sm bg-transparent outline-none placeholder:text-zinc-200 flex-1
                       border-0 focus:ring-transparent"
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <TableHeading>
              <input
                type="checkbox"
                name=""
                id=""
                className="size-4 bg-zinc-950 border-zinc-50/10 text-orange-400 rounded 
                           focus:ring-orange-400"
              />
            </TableHeading>
            <TableHeading>Código</TableHeading>
            <TableHeading>Participante</TableHeading>
            <TableHeading>Data de inscrição</TableHeading>
            <TableHeading>Data do check-in</TableHeading>
            <TableHeading className="size-7"></TableHeading>
          </tr>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow key={attendee.id}>
              <TableCell className="size-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-4 bg-zinc-950 border-zinc-50/10 text-orange-400 rounded 
                           focus:ring-orange-400"
                />
              </TableCell>
              <TableCell>
                {attendee.id}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1 ">
                  <span className="text-zinc-50 font-semibold">{attendee.name}</span>
                  <span className="text-xs">{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>
                {dayjs().locale("pt-br").to(attendee.createdAt)}
              </TableCell>
              <TableCell>
                {dayjs().locale("pt-br").to(attendee.checkedInAt)}
              </TableCell>
              <TableCell className="size-7">
                <IconButton className="ml-auto" transparent>
                  <EllipsisIcon size={16} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

        </tbody>

        <tfoot>
          <tr className="text-sm text-zinc-200">
            <td colSpan={3} className="pl-4">
              <p>Mostrando 10 de {attendees.length} itens</p>
            </td>
            <td colSpan={3} className="py-3 pr-4">
              <div className="flex items-center justify-end gap-8">
                <p>Página {page} de {totalPages}</p>

                <div className="flex items-center gap-1.5">
                  <IconButton disabled={page === 1} onClick={handleGoToFirstPage}>
                    <ChevronsLeftIcon size={16} />
                  </IconButton>
                  <IconButton disabled={page === 1} onClick={handleGoToPreviousPage}>
                    <ChevronLeftIcon size={16} />
                  </IconButton>
                  <IconButton disabled={page === totalPages} onClick={handleGoToNextPage}>
                    <ChevronRightIcon size={16} />
                  </IconButton>
                  <IconButton disabled={page === totalPages} onClick={handleGoToLastPage}>
                    <ChevronsRightIcon size={16} />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}