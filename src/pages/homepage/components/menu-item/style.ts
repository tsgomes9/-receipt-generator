import { Paper } from "@mui/material";
import styled from "styled-components";

export const MenuItemContainer = styled(Paper)`
    height: 10rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:active
    {
        box-shadow: 2px 2px 5px  grey;
    }
    
`