import React, { useState } from "react";

const obfuscationQuiz = [
  {
    question: "In Monsters, Inc., why is finding Boo's door so difficult?",
    options: [
      "The doors are locked",
      "There are too many doors that look the same",
      "Boo's door is invisible",
      "They lost the key",
    ],
    answer: 1,
  },
  {
    question: "Which of these is an example of obfuscation?",
    options: [
      "Using a password manager",
      "Installing antivirus software",
      "Hiding malicious code inside a normal-looking file",
      "Storing files in the cloud",
    ],
    answer: 2,
  },
  {
    question: "Which character in Monsters, Inc. best represents obfuscation through disguise?",
    options: [
      "Sulley",
      "Mike",
      "Randall",
      "Roz",
    ],
    answer: 2,
  },
  {
    question: "Why would someone obfuscate their code?",
    options: [
      "To make it run faster",
      "To fix bugs",
      "To save storage space",
      "To hide what the code is really doing",
    ],
    answer: 3,
  },
  {
    question: "How does obfuscation protect information?",
    options: [
      "It deletes the data",
      "It locks users out",
      "It hides the data's true meaning",
      "It stores the data separately",
    ],
    answer: 2,
  },
];

const ObfuscationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState(Array(obfuscationQuiz.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setAnswers(Array(obfuscationQuiz.length).fill(null));
    setSubmitted(false);
  };

  const handleOptionChange = (qIndex, oIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = oIndex;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setSubmitted(true);
  };

  const allCorrect = answers.every((a, i) => a === obfuscationQuiz[i].answer);

  return (
    <>
     <button onClick={toggleModal} type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Activity</button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleModal}></div>

          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Quiz: Obfuscation & Monsters, Inc.
                  </h3>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 space-y-6 text-gray-800 dark:text-gray-200">
                  {obfuscationQuiz.map((q, qIndex) => (
                    <div key={qIndex}>
                      <p className="mb-2 font-medium">{qIndex + 1}. {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, oIndex) => (
                          <label key={oIndex} className="block">
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              value={oIndex}
                              checked={answers[qIndex] === oIndex}
                              onChange={() => handleOptionChange(qIndex, oIndex)}
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                      {submitted && (
                        <p className={`mt-1 text-sm ${
                          answers[qIndex] === q.answer ? "text-green-600" : "text-red-600"
                        }`}>
                          {answers[qIndex] === q.answer ? "✅ Correct" : `❌ Incorrect`}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 rounded-b">
                  <button
                    onClick={checkAnswers}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                  >
                    Submit Answers
                  </button>
                  <button
                    onClick={toggleModal}
                    className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg px-5 py-2.5 hover:bg-gray-100 hover:text-purple-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Close
                  </button>
                </div>

                {submitted && (
                  <div className="p-4">
                    <p className={`text-center font-semibold ${
                      allCorrect ? "text-green-600" : "text-yellow-500"
                    }`}>
                      {allCorrect
                        ? "🎉 Great job! You answered everything correctly."
                        : "🔍 Some answers need a second look — try again!"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ObfuscationModal;