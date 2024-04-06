import nlwUniteIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <header className="py-2 flex items-center gap-5">
      <img src={nlwUniteIcon} alt="NLW Unite Icon" className="size-8" />

      <nav className="flex items-center gap-5">
        <a href="" className="text-sm font-medium text-zinc-200">Eventos</a>
        <a href="" className="text-sm font-medium">Participantes</a>
      </nav>
    </header>
  )
}