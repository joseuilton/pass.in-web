import { AttendeesList } from "./components/attendees-list";
import { Header } from "./components/header";

export function App() {

  return (
    <div className="max-w-[1216px] mx-auto px-8 py-5 flex flex-col gap-5">
      <Header />
      <AttendeesList />
    </div>
  )
}
