import { Typography } from "@mui/material";
import { AlertStyle } from "./styles";

export default function AlertSucess() {
  return (
    <AlertStyle>
      <Typography fontSize={"12px"} fontWeight={"bolder"}>
        PDF Gerado com Sucesso!
      </Typography>
    </AlertStyle>
  );
}
