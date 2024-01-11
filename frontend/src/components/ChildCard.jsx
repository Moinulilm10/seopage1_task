import LowerComponent from "./Child Components/LowerComponent";
import MiddleComponent from "./Child Components/MiddleComponent";
import UpperComponent from "./Child Components/UpperComponent";

function ChildCard({ setModal, modal, list }) {
  return (
    <div className="bg-white rounded p-2 font-semibold flex flex-col gap-3">
      <UpperComponent />
      <MiddleComponent />
      <LowerComponent setModal={setModal} modal={modal} list={list} />
    </div>
  );
}

export default ChildCard;
