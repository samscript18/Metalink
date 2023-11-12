const Button = ({ text }) => {
  return (
    <div className="bg-violetBlue text-white text-lg font-medium px-4 py-2 rounded-3xl hover:bg-violetBlue2 cursor-pointer z-9">
      {text}
    </div>
  );
};
export default Button;
