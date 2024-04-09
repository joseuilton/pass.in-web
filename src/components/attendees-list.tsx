import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, SearchIcon } from "lucide-react";
import { IconButton } from "./icon-button";

export function AttendeesList() {
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

      <div className="border border-zinc-50/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-3 px-4 text-sm font-semibold size-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-4 bg-zinc-950 border-zinc-50/10 text-orange-400 rounded 
                           focus:ring-orange-400"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i} className="border-y border-y-zinc-50/10 hover:bg-zinc-50/5">
                <td className="py-3 px-4 text-sm font-semibold size-4">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="size-4 bg-zinc-950 border-zinc-50/10 text-orange-400 rounded 
                           focus:ring-orange-400"
                  />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-200 text-left">
                  52716
                </td>
                <td className="py-3 px-4 text-sm text-left">
                  <div className="flex flex-col gap-1 ">
                    <span className="font-semibold">Diego Schell Fernandes</span>
                    <span className="text-zinc-200 text-xs">diego.schell.f@gmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-200 text-left">
                  7 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-200 text-left">
                  3 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-200">
                  <IconButton transparent>
                    <EllipsisIcon size={16} />
                  </IconButton>
                </td>
              </tr>
            ))}

          </tbody>

          <tfoot>
            <tr className="text-sm text-zinc-200">
              <td colSpan={3} className="pl-4">
                <p>Mostrando 10 de 228 itens</p>
              </td>
              <td colSpan={3} className="py-3 pr-4">
                <div className="flex items-center justify-end gap-8">
                  <p>Página 1 de 11</p>

                  <div className="flex items-center gap-1.5">
                    <IconButton disabled>
                      <ChevronsLeftIcon size={16} />
                    </IconButton>
                    <IconButton disabled>
                      <ChevronLeftIcon size={16} />
                    </IconButton>
                    <IconButton>
                      <ChevronRightIcon size={16} />
                    </IconButton>
                    <IconButton>
                      <ChevronsRightIcon size={16} />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  )
}