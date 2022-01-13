import "./styles.css";

export const NavButton = (props) => {
  return (
    <button
      className={`nav-button${props.active ? " nav-button--active" : ""}`}
      onClick={() => {
        if (props.path) {
          window.location = props.path;
        }
      }}
    >
      {props.label}
    </button>
  );
};
