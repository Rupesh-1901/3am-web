export const TextError = (props) => {
  return (
    <div className="form-error" style={props.styles}>
      <div style={{ height: "14px", width: "15px", color: "red" }}>
        {props.children}
      </div>
    </div>
  );
};
