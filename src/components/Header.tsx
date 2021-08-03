import { FC } from "react";
import { HeaderBox, HeaderText } from "../styles/HeaderStyles";

const Header: FC = () => {
  return (
    <HeaderBox>
      <HeaderText>Participants</HeaderText>
      <HeaderText>Points</HeaderText>
    </HeaderBox>
  )
}

export default Header;
