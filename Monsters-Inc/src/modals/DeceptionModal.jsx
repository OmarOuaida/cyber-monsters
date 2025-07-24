import React, { useState } from "react";

const quotes = [
  {
    id: 1,
    text: "Hey, I forgot my badge — can you hold the door for me?",
    isRandall: true,
  },
  {
    id: 2,
    text: "Just checking in! Did you see the new security update?",
    isRandall: false,
  },
  {
    id: 3,
    text: "Mind helping me with this file transfer? It’s urgent!",
    isRandall: false,
  },
  {
    id: 4,
    text: "Don’t worry, I know the boss personally — you can skip the protocol.",
    isRandall: false,
  },
];

const RandallModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedId(null); // Reset activity
  };

  const handleSelect = (id) => {
    if (!selectedId) setSelectedId(id);
  };

  const getResult = (quote) => {
    if (!selectedId) return "";
    if (quote.isRandall && quote.id === selectedId) return "✅ You spotted Randall!";
    if (!quote.isRandall && quote.id === selectedId) return "❌ Nope! That wasn't Randall.";
    return "";
  };

  return (
    <>
      {/* Modal trigger button */}
      <button onClick={toggleModal} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Activity</button>

      {/* Modal content */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleModal}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto px-4">
            <div className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 border-b pb-2 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Spot the Randall
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center leading-relaxed">
            You’re working in a busy office when a few co-workers approach or message you
            throughout the day. They each seem friendly or casual, but something feels a
            little off. One of them might be trying to bypass workplace security using
            subtle social engineering tactics — just like Randall in <em>Monsters, Inc.</em>
            <br /><br />
            <strong>Your task:</strong> Read each quote carefully and spot the one with
            malicious intent. Don’t be fooled — deception often hides behind familiarity,
            urgency, or trust.
            </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {quotes.map((quote) => (
                  <button
                    key={quote.id}
                    onClick={() => handleSelect(quote.id)}
                    className={`w-full text-left p-4 border rounded-lg transition-all duration-200
                      ${
                        selectedId === quote.id
                          ? quote.isRandall
                            ? "bg-green-100 border-green-400"
                            : "bg-red-100 border-red-400"
                          : "bg-gray-100 hover:bg-yellow-100 border-gray-300"
                      }`}
                  >
                    <p className="text-gray-800 dark:text-gray-100">"{quote.text}"</p>
                    {selectedId === quote.id && (
                      <p
                        className={`mt-2 font-semibold ${
                            quote.isRandall && selectedId === quote.id
                            ? "text-green-700"
                            : !quote.isRandall && selectedId === quote.id
                            ? "text-red-700"
                            : ""
                        }`}
                        >
                        {getResult(quote)}
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedId(null)}
                  disabled={!selectedId}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {selectedId ? "Try Again" : "Select a Quote"}
                </button>
                <button
                  onClick={toggleModal}
                  className="text-sm text-gray-700 bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RandallModal;