import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../styles/index.css";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNav() {
  return (
    <nav>
      <NavList>
        <li className="linksComponent">
          <a href="/dashboard" className="links">
            <HiOutlineHome />
            <span>Home</span>
          </a>
        </li>
        <li className="linksComponent">
          <a href="/bookings" className="links">
            <HiOutlineCalendarDays />
            Bookings
          </a>
        </li>
        <li className="linksComponent">
          <a href="/cabins" className="links">
            <HiOutlineHomeModern />
            Cabins
          </a>
        </li>
        <li className="linksComponent">
          <a href="/users" className="links">
            <HiOutlineUser />
            Users
          </a>
        </li>
        <li className="linksComponent">
          <a href="/settings" className="links">
            <HiOutlineCog6Tooth />
            Settings
          </a>
        </li>
      </NavList>
    </nav>
  );
}
export default MainNav;
