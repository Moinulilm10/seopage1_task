import { useState } from "react";
import Modal from "./Components/Modal";
import ParentCard from "./Components/ParentCard";

function App() {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const data = [
    {
      title: "Incomplete",
      card: 6,
      color: "red",
    },
    {
      title: "To Do",
      card: 5,
      color: "blue",
    },
    {
      title: "Doing",
      card: 7,
      color: "yellow",
    },
    {
      title: "Under Review",
      card: 6,
      color: "none",
    },
    {
      title: "Completed",
      card: 4,
      color: "none",
    },
  ];

  return (
    <div className="h-screen overflow-x-auto flex gap-4 p-5 max-maxWidth m-auto  whitespace-nowrap relative">
      {data.map((item, index) => (
        <ParentCard
          key={index}
          data={item}
          setModal={setModal}
          modal={modal}
          list={list}
        />
      ))}
      <Modal modal={modal} setModal={setModal} list={list} setList={setList} />
    </div>
  );
}
export default App;
