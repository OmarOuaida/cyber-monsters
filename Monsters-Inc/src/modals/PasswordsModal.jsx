import React, { useState } from "react";

const wordBank = [
  "scream", "door", "boo", "randall", "roz", "monstropolis",
  "scare", "sock", "sulley", "laughter", "codeRed"
];

const checkStrength = (password) => {
  const lengthOK = password.length >= 10;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return {
    lengthOK,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpecial,
    isStrong: lengthOK && hasUpper && hasLower && hasNumber && hasSpecial,
  };
};

const PasswordsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [customPassword, setCustomPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedWords([]);
    setCustomPassword("");
  };

  const addWord = (word) => {
  const newWords = [...selectedWords, word];
  setSelectedWords(newWords);
  setCustomPassword(newWords.join("")); // <-- sync password string
};

  const handleInputChange = (e) => {
    setCustomPassword(e.target.value);
  };

  const strength = checkStrength(customPassword);

  return (
    <>
        <button onClick={toggleModal} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Activity</button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleModal}
          ></div>

          <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto px-4">
            <div className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 border-b pb-2 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Create a Monster-Proof Password
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Instructions */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center leading-relaxed">
                Pick some monster-themed words, mix in numbers, CAPITALS, and special characters
                to build your password. Make sure it’s at least 10 characters long and strong enough to keep Randall out!
              </p>

              {/* Word bank */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {wordBank.map((word) => (
                  <button
                    key={word}
                    onClick={() => addWord(word)}
                    className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded text-sm font-medium"
                  >
                    {word}
                  </button>
                ))}
              </div>

              {/* Input field */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Monster Password
                </label>
                <input
                type="text"
                value={customPassword || selectedWords.join("")}
                onChange={handleInputChange}
                placeholder="Add symbols, numbers, and flair!"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />

                {customPassword && (
                <div className="flex justify-end items-center mt-2 gap-4">
                    <button
                    onClick={() => {
                        setSelectedWords([]);
                        setCustomPassword("");
                    }}
                    className="text-sm text-red-600 hover:text-red-800 underline"
                    >
                    Clear password
                    </button>
                    <button
                    onClick={() => {
                        navigator.clipboard.writeText(customPassword || selectedWords.join(""));
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                    >
                    Copy
                    </button>
                </div>
                )}

                {copied && (
                <div className="flex justify-end mt-1 pr-2">
                    <span className="text-xs text-green-600 font-medium">Copied!</span>
                </div>
                )}
              </div>

              {/* Feedback */}
              <div className="text-sm text-gray-800 dark:text-gray-200 mb-4 space-y-1">
                <p>
                  Contains uppercase:{" "}
                  <span className={strength.hasUpper ? "text-green-600" : "text-red-500"}>
                    {strength.hasUpper ? "Yes" : "No"}
                  </span>
                </p>
                <p>
                  Contains lowercase:{" "}
                  <span className={strength.hasLower ? "text-green-600" : "text-red-500"}>
                    {strength.hasLower ? "Yes" : "No"}
                  </span>
                </p>
                <p>
                  Contains number:{" "}
                  <span className={strength.hasNumber ? "text-green-600" : "text-red-500"}>
                    {strength.hasNumber ? "Yes" : "No"}
                  </span>
                </p>
                <p>
                  Contains special character:{" "}
                  <span className={strength.hasSpecial ? "text-green-600" : "text-red-500"}>
                    {strength.hasSpecial ? "Yes" : "No"}
                  </span>
                </p>
                <p>
                  Minimum length (10+):{" "}
                  <span className={strength.lengthOK ? "text-green-600" : "text-red-500"}>
                    {strength.lengthOK ? "Yes" : "No"}
                  </span>
                </p>
              </div>

              {/* Strength Summary */}
              <p className={`font-bold text-center text-lg ${
                strength.isStrong ? "text-green-600" : "text-yellow-500"
              }`}>
                {strength.isStrong
                  ? "🎉 That’s a monsterous password!"
                  : "⚠️ Your password needs more strength!"}
              </p>

              {/* Footer */}
              <div className="flex justify-end mt-6">
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

export default PasswordsModal;