const Selesai = (props) => {
    const {
      children,
      classname = "bg-green-500 mx-2 mt-5 h-12",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`text-4xl h-10 px-24 font-semibold rounded-lg ${classname} text-white`}
        type={type}
        onClick={() => onClick()}
      >
        Selesai
      </button>
    );
  };
  
  export default Selesai;
  