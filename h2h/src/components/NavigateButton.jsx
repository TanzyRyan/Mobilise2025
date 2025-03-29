import { useNavigate } from "react-router-dom";

const NavigateButton = ({ to, label }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(to)} 
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default NavigateButton;