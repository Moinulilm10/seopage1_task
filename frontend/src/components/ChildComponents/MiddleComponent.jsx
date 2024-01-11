function MiddleComponent() {
  return (
    <div className="flex justify-between items-center gap-16 px-2">
      <div className="flex justify-center items-center gap-2">
        <img className="w-3" src="images/logo/layer.png" alt="Layer" />
        <p className="text-sm text-gray-700 font-medium">
          Lorem ipsum dolor sit amet curn
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 bg-gray-200 p-1 px-2  mr-2 rounded">
        <img className="w-3" src="images/logo/clipboard.png" alt="Clip Board" />
        <p className="text-sm text-gray-700">1/2</p>
      </div>
    </div>
  );
}

export default MiddleComponent;
