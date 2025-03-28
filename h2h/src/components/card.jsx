const Card = ({ title, children }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        <div className="text-gray-600">{children}</div>
      </div>
    );
  };
  
  export default Card;
  