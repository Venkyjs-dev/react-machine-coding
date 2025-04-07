import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ id, title, icon, description }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/features/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl p-4 shadow-sm hover:shadow-md transition-all bg-whilte">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
