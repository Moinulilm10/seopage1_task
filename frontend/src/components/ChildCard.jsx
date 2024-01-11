/* eslint-disable react/prop-types */
import LowerComponent from "./ChildComponents/LowerComponent";
import MiddleComponent from "./ChildComponents/MiddleComponent";
import UpperComponent from "./ChildComponents/UpperComponent";

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
