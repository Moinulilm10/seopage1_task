function UpperComponent() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <img
          className="w-6 rounded-full"
          src="/images/users/user1.png"
          alt="user 1"
        />
        <h1 className="text-sm text-gray-600">Client Name</h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img
          className="w-6 rounded-full "
          src="/images/users/user2.png"
          alt="user 2"
        />
        <h1 className="text-sm text-gray-600">Sadik Istiak</h1>
      </div>
    </div>
  );
}

export default UpperComponent;
