import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/AppLayout.css";
export default function AppLayout() {
  return (
    <div className="main-component">
      <Header />
      <Sidebar />
      <main className="main-window">
        <Outlet />
      </main>
    </div>
  );
}
