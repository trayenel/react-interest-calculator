const InputComponent = (props) => {
  return (
    <p>
      <label htmlFor={props.label}>{props.children}</label>
      <input
        type="number"
        id={props.label}
        onChange={(event) => {
          event.preventDefault();
          props.dataHandler(event.target.value, props.label);
        }}
      />
    </p>
  );
};

export default InputComponent;
