import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What should Sully have done when he found Boo's door left behind?",
    options: [
      "Ignore it — it’s probably a glitch",
      "Report it to the CDA or a supervisor",
      "Push it back into the system quietly",
      "Use it to sneak in and explore",
    ],
    answer: 1,
  },
  {
    question: "Why was Sully’s action a security risk?",
    options: [
      "Because he damaged a door",
      "Because Boo was loud",
      "Because he bypassed protocol and let a threat into the monster world",
      "Because Mike was mad at him",
    ],
    answer: 2,
  },
  {
    question: "How can organisations prevent mistakes like Sully’s?",
    options: [
      "Punish all mistakes immediately",
      "Make everyone paranoid",
      "Install more doors",
      "Foster a security culture where staff know and follow procedures",
    ],
    answer: 3,
  },
];

const WeakestLinkModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setAnswers(Array(quizQuestions.length).fill(null));
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

  const allCorrect = answers.every((a, i) => a === quizQuestions[i].answer);

  return (
    <>
      <button onClick={toggleModal} type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Activity</button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleModal}></div>

          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Quiz: The Weakest Link
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
                  {quizQuestions.map((q, qIndex) => (
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
                        : "🔍 Review your answers and try again!"}
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

export default WeakestLinkModal;