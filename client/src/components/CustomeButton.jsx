



const CustomeButton = ({ title, type, customStyles, handleClick }) => {
    const generateStyle = (type) => {
        if ( type === 'filled'){
            return {
                backgroundColor: '#000',
                color: '#fff'
            }
        }
    }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
