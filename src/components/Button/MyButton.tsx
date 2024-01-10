import { ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
};

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.button, styles[`button-${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
