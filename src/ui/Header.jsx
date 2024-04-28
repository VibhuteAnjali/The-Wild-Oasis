import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import "../styles/AppLayout.css";
export default function Header() {
  return (
    <div className="header">
      <UserAvatar />
      <HeaderMenu />
    </div>
  );
}
