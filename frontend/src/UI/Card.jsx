/* eslint-disable react/prop-types */
const Card = ({ children }) => {
  return (
    <div className="card border-2 rounded-sm shadow-md bg-white overflow-x-auto p-3">
      {children}
    </div>
  );
};

export default Card;
