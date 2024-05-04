export default function Input({
  type = "text",
  className,
  placeholder = "",
  label = false,
  wrapperClass = "",
  labelClass = "",
  id = "",
  name = "",
}) {
  return (
    <>
      {/* {label ? (
        <label htmlFor={id} className={labelClass}>
          {name}
        </label>
      ) : null}
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        id={id} */}

      {label ? (
        <div className={wrapperClass}>
          <label htmlFor={id} className={labelClass}>
            {name}
          </label>
          <input
            type={type}
            className={className}
            placeholder={placeholder}
            id={id}
          />
        </div>
      ) : (
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          id={id}
        />
      )}
    </>
  );
}
