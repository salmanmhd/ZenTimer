// eslint-disable-next-line
function Button({ text, onPress }) {
  return (
    <button
      onClick={onPress}
      className='bg-dark_yellow text-custom_blue font-bold w-20 px-6 py-1 rounded-2xl hover:bg-dark_yellow-400 focus:outline-none focus:ring-2 focus:ring-dark_yellow-300 focus:ring-opacity-75'
    >
      {text}
    </button>
  );
}

export default Button;

// absolute z-10 left-10
