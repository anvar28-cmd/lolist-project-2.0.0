function TextField({
  id,
  label,
  name,
  type,
  placeholder,
  required,
  defaultValue,
  autoComplete,
}) {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>{label}</label>
      <input 
        className="text-field__input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}

export default TextField;
