const TextArea = ({
  label,
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
      <textarea
        id={name}
        name={name}
        className="font-normal text-sm text-primary placeholder:text-secondary outline-none border border-secondary hover:border-primary focus:border-primary rounded-md resize-none px-3 py-2 transition duration-300 ease-out"
        value={value}
        rows="5"
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      ></textarea>
      {error && <p className="font-light text-sm text-red-700">{error}</p>}
    </div>
  );
};

export default TextArea;
