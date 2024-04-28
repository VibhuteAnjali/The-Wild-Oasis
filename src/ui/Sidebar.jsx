import "../styles/AppLayout.css";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <MainNav />
    </div>
  );
}
