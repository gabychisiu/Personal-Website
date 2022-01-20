import "./styles.css";

export const LabelValueItem = ({ label, value }) => {
  return (
    <div className="label-style">
      <h2>{label}</h2>
      <h3>{value}</h3>
    </div>
  );
};
