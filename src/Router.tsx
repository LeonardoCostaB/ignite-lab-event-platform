import { Route, Routes } from "react-router-dom";
import { Subscribe } from "./pages/Subscriber";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Subscribe /> } />

      <Route path="/event" element={ <Event /> } />
      <Route path="/event/lession/:slug" element={ <Event /> } />
    </Routes>
  )
}