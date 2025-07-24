import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Sortable item component
const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "8px",
    background: "#f3f4f6",
    color: "#111",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

const CodesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    "Restore safety",
    "Isolate the threat",
    "Eliminate the threat",
    "Identify the threat",
  ]);

  const correctOrder = [
    "Identify the threat",
    "Isolate the threat",
    "Eliminate the threat",
    "Restore safety",
  ];

  const [showResult, setShowResult] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setShowResult(false); // Reset on close
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const checkAnswer = () => {
    setShowResult(true);
  };

  const isCorrect = JSON.stringify(items) === JSON.stringify(correctOrder);

  return (
    <>
      {/* Modal toggle button */}
      <button onClick={toggleModal} type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Activity</button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleModal}
          ></div>

          {/* Modal */}
          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order the Incident Response Steps
                  </h3>
                  <button
                    onClick={toggleModal}
                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-600 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 text-gray-700 dark:text-gray-200">
                  <p className="mb-4">
                    Drag the steps into the correct order based on how the CDA
                    handles a 2319 emergency:
                  </p>

                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext items={items}>
                      {items.map((step) => (
                        <SortableItem key={step} id={step} />
                      ))}
                    </SortableContext>
                  </DndContext>

                  {showResult && (
                    <p
                      className={`mt-4 font-medium ${
                        isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isCorrect
                        ? "✅ Correct order!"
                        : "❌ That’s not quite right. Try again!"}
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={checkAnswer}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                  >
                    Check Answer
                  </button>
                  <button
                    onClick={toggleModal}
                    className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg px-5 py-2.5 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CodesModal;