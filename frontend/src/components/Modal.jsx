/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Modal({ modal, setModal, list, setList }) {
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);
  const [changes, setChanges] = useState(false);
  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all selected files to the FormData object
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      const url = "http://localhost:3001/api/user/upload";
      const result = await axios.post(url, formData);
      setFiles([]);
      inputFileRef.current.value = ""; // Reset input value
      setChanges((prevChanges) => !prevChanges);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Array.from(selectedFiles);
    setFiles(filesArray);
  };

  //File list and count
  useEffect(() => {
    const fetchFileNames = async () => {
      try {
        console.log("object");
        const result = await axios.get(
          "http://localhost:3001/api/user/fileName"
        );
        console.log("out");
        const files = result.data.payload.fileNames;
        setList(files);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFileNames();
  }, [changes, setList]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`fixed inset-0 bg-opacity-50 bg-white backdrop-blur-md flex justify-center items-center z-50 ${
        modal ? "translate-y-0" : "-translate-y-full"
      } transition-all duration-300 `}
    >
      <div className="bg-gray-100 p-4 border-2 border-white shadow-lg relative w-1/2">
        <img
          onClick={() => setModal(!modal)}
          className="w-6 absolute top-5 right-5 cursor-pointer "
          src="/images/logo/close.png"
          alt="Close"
        />
        <input
          required
          ref={inputFileRef}
          className="text-center mt-10 mb-2"
          type="file"
          accept="image/jpeg, image/png, image/svg+xml, application/pdf"
          onChange={handleFileChange}
          multiple
        />
        <div className="flex justify-center items-center my-2">
          <button
            type="submit"
            className={`text-center bg-white rounded px-3 py-1.5 text-black font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300`}
          >
            Add
          </button>
        </div>
        <h1 className="text-center font-semibold text-black text-xl mb-2">
          Uploaded Files
        </h1>
        <div className="border-2">
          {list.map((list, idx) => (
            <p className="text-black" key={idx}>
              {idx + 1}. {list}
            </p>
          ))}
          {list.length === 0 && (
            <p className="text-center text-black">No file in database</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default Modal;
