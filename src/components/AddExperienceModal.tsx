import React from 'react';

interface AddExperienceModalProps {
  isOpen: boolean;
  setShowModal: (isOpen: boolean) => void;
}

const AddExperienceModal: React.FC<AddExperienceModalProps> = ({ isOpen, setShowModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-fit max-w-7xl max-h-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-fit bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Add an Experience
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/* Form items */}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-purple text-white font-bold w-24 uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-purple"></div>
    </>
  );
};

export default AddExperienceModal;
