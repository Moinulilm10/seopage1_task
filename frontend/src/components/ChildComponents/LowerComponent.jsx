function LowerComponent({ setModal, modal, list }) {
  return (
    <div className="flex justify-between items-center font-semibold text-sm text-gray-700">
      <img
        className="w-6 rounded-full"
        src="/images/users/user3.png"
        alt="User 3"
      />
      <img
        className="w-6 rounded-full"
        src="/images/users/user4.png"
        alt="User 4"
      />
      <h1 className="rounded-full p-1 bg-gray-200">12+</h1>
      <div className="flex justify-center items-center gap-1">
        <img className="w-3" src="/images/logo/chat.png" alt="Chat" />
        <p>15</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img
          onClick={() => setModal(!modal)}
          className="w-3 cursor-pointer hover:scale-125 transition-all duration-300"
          src="/images/logo/attach.png"
          alt="Attach"
        />
        <p>{list.length === 0 ? 0 : list.length}</p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <img className="w-3" src="/images/logo/calendar.png" alt="Calendar" />
        <p>30-12-2022</p>
      </div>
    </div>
  );
}

export default LowerComponent;
