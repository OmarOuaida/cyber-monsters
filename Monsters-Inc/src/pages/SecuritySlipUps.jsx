import ScrollableTextBox from "../components/ScrollableTextBox";
import React from "react";
import ReactMarkdown from "react-markdown";
const aboutContent = `
# About This Project

This project is an educational tool designed to help people better understand important concepts in a simple and engaging way. By combining visual media with interactive content, it encourages reflection, learning, and discussion around key ideas that affect both everyday life and professional practice.

The goal is to make learning more relatable and accessible — not just by explaining facts, but by using familiar stories and examples to spark curiosity and deeper understanding. Whether you're a student, educator, or just someone interested in the topic, this tool is here to support meaningful learning in a creative and thoughtful format.
`;


const SlipUpsPage = () => {
   return (
    <div className="min-h-screen overflow-hidden bg-white flex items-center justify-center p-6">
        <img
          src="../public/assets/poster.png"
          alt="Digital Hygiene Poster"
          className="max-w-full h-auto rounded-md shadow-lg"
        />
    </div>
  );
};

export default SlipUpsPage;
