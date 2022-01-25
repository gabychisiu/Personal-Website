import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavButton = (props) => {
  return (
    <Button
      variant="contained"
      className="nav-button"
      activeClassName="nav-button--active"
    >
      <NavLink to={props.path}>{props.label}</NavLink>
    </Button>
  );
};
