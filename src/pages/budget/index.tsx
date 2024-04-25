import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Budget() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Página em construção...</h1>
      <Button
        variant="outlined"
        type="submit"
        fullWidth
        onClick={() => navigate("../")}
      >
        Cancelar
      </Button>
    </>
  );
}
