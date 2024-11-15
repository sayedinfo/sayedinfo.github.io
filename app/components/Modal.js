import { useEffect, useState } from "react";

export default function Modal({ showModal, setShowModal, children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsOpen(true);
    } else {
      setTimeout(() => setIsOpen(false), 300); // Delay for closing animation
    }
  }, [showModal]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
          <div
            className={`relative w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg transform transition-all duration-300 ${
              showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="modal-header p-3">
              <button
                className="w-full flex items-center justify-end text-gray-500 hover:text-gray-500"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-content p-5">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
