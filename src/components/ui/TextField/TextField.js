function TextField({
  id,
  label,
  name,
  type,
  placeholder,
  required,
  defaultValue,
  minlength,
  pattern,
  title,
}) {
  return (
    <div className="text-field">
      <input
        className="text-field__input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        minLength={minlength}
        title={title}
        pattern={pattern}
      />
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default TextField;
