const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-bold text-sm text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="font-normal text-sm text-primary placeholder:text-secondary outline-none border border-secondary hover:border-primary focus:border-primary rounded-md px-3 py-2 transition duration-300 ease-out"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className="font-light text-sm text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
