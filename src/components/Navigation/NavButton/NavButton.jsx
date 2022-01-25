import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavButton = (props) => {
  return (
    <Button
      variant="contained"
      className="nav-button"
      sx={{ padding: 0, margin: 0.5 }}
    >
      <NavLink to={props.path} className="nav-link">
        {props.label}
      </NavLink>
    </Button>
  );
};
