
// components/ScrollableTextBox.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const ScrollableTextBox = ({ markdownText }) => {
  return (
    <div className="h-[500px] overflow-y-auto p-4 border rounded-lg bg-white shadow w-full max-w-md text-black text-sm leading-relaxed space-y-3 prose prose-sm ">
      <ReactMarkdown >{markdownText}</ReactMarkdown>
    </div>
  );
};



export default ScrollableTextBox;