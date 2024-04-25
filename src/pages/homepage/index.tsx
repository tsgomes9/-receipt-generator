import React from "react";
import { Button, Link, Typography } from "@mui/material";
import { Link as LinkRouter, Outlet, useNavigate } from "react-router-dom";
import { linkList } from "./home-list-links";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <Typography textAlign={"center"} p={3}>
        Selecione o documento que deseja gerar{" "}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        {linkList.map((route, index) => (
          <Button
            key={index}
            variant={"outlined"}
            sx={{ margin: "5px" }}
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </Button>
        ))}
      </div>
    </>
  );
}
