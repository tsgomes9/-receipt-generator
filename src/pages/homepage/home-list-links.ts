import { IMenuItem } from "./types";
// @ts-ignore
import Receipt from "../../assets/icons/receipt.svg";
// @ts-ignore
import Article from "../../assets/icons/article.svg"



export const linkList: IMenuItem[] = [
  {
    path: "receipt",
    name: "Recibo",
    icon: Receipt
  },
  {
    path: "budget",
    name: "Orçamento",
    icon: Article
  },
];
