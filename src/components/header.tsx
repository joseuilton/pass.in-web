import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="py-2 flex items-center gap-5">
      <img src={nlwUniteIcon} alt="NLW Unite Icon" className="size-8" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes" isActive>Participantes</NavLink>
      </nav>
    </header>
  )
}