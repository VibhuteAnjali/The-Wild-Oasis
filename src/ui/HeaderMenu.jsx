// import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import "../styles/index.css";
import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="ul">
        <li>
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUser />
          </ButtonIcon>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
