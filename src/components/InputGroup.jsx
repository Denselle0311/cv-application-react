/* eslint-disable react/prop-types */
const InputGroup = ({
  type,
  value,
  placeholder,
  onChange,
  id,
  label,
  maxSize,
  minSize,
  options = {
    optional: false,
    recommended: false,
  },
}) => {
  const defaultMin = minSize || "min-w-80";
  return (
    <div id="input-group" className="flex flex-col gap-1">
      <label className="self-start" htmlFor={id}>
        <span className="font-semibold ">{label}</span>
        {options?.optional && (
          <span className="ml-3 font-semibold text-gray-400 text-sm">
            optional
          </span>
        )}
        {options?.recommended && (
          <span className="ml-3 font-semibold text-gray-400 text-sm">
            recommended
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          className="py-2 px-4 min-w-80 min-h-16 rounded-lg bg-gray-100 font-[450]"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
        />
      ) : (
        <input
          className={`py-2 px-4 ${defaultMin} rounded-lg bg-gray-100 font-[450] ${maxSize}`}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
        />
      )}
    </div>
  );
};

export default InputGroup;
