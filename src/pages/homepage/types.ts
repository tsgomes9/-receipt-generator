export interface IMenuItem {
    icon: string;
    name: string;
    path: string;
    onClick?: () => void;
    key?: React.Key
  }