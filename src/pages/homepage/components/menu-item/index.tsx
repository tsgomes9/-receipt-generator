import { Typography } from "@mui/material";
import { IMenuItem } from "../../types";
import { MenuItemContainer } from "./style";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ icon, name, path }: IMenuItem) {
  const navigate = useNavigate();
  return (
    <MenuItemContainer onClick={() => navigate(path)}>
      <img src={icon} style={{ width: "50px" }} />
      <Typography>{name}</Typography>
    </MenuItemContainer>
  );
}
