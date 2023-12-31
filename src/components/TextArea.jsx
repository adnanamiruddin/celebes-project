export default function TextArea({
  label,
  name,
  placeholder,
  value,
  handleInputChange,
}) {
  return (
    <>
      <label>{label}</label>
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        className="input input-bordered w-full h-32 p-4 resize-none focus:border-2 focus:border-blue-500 mt-1 bg-gray-100 active:shadow-lg"
      />
    </>
  );
}
