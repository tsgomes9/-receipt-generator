import { Typography } from "@mui/material";
import { linkList } from "./home-list-links";
import MenuItem from "./components/menu-item";

export default function Homepage() {
  return (
    <>
      <Typography textAlign={"center"} p={3}>
        Selecione o documento que deseja gerar{" "}
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          maxWidth: "500px",
          margin: "auto",
          gap: "10px",
        }}
      >
        {linkList.map((route, index) => (
          <MenuItem
            key={index}
            icon={route.icon}
            name={route.name}
            path={route.path}
          />
        ))}
      </div>
    </>
  );
}
