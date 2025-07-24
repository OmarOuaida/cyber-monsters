import React from "react";
import myVideo from "../../assets/obfuscation.mp4";
import ScrollableTextBox from "../../components/ScrollableTextBox";
import ObfuscationModal from "../../modals/ObfuscationModal";

const markdownContent = `# Lost in the Doors: What is Obfuscation?

In this lesson, we dive into one of the most chaotic and revealing scenes in *Monsters, Inc.* — when Mike and Sulley frantically search for Boo’s door in the massive warehouse of suspended doors. Thousands of doors race past them on conveyor belts, each indistinguishable from the next. Without a unique identifier or access system, finding Boo’s door feels nearly impossible.

This moment perfectly illustrates the concept of **obfuscation** in cybersecurity.

Obfuscation is the process of deliberately hiding or disguising information so that it’s difficult to interpret or misuse — even if someone gains access to it. In the digital world, this might mean scrambling data, using misleading names, or encoding files to prevent attackers from understanding their purpose. Just like Sulley and Mike trying to locate Boo’s door, someone trying to uncover obfuscated data is overwhelmed by a sea of options that all look the same.

# Why This Matters

In cybersecurity, obfuscation is a key defence mechanism. It doesn’t block access entirely, but it makes interpretation difficult. Whether it’s code, file names, or sensitive messages, obfuscation acts as a layer of confusion, forcing attackers to work harder — or give up entirely.

# Summary

- **The Door Warehouse**: A visual metaphor for data obfuscation — too many similar items, no clear path.
- **Boo’s Hidden Door**: Represents the sensitive information. Even if you can see all the doors (data), finding the *right* one is difficult without special access or knowledge.


> Obfuscation doesn’t erase data — it buries it. Just like in *Monsters, Inc.*, even when all the doors are right in front of you, without context or a key, you're just guessing.
`;

const ObfuscationPage = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto text-white">

      <div className="flex flex-col md:flex-row">
        {/* Left: Video */}
        <div className="flex-1">
          <video
            src={myVideo}
            controls
            className="w-full h-full pr-10 rounded shadow-lg"
            poster="https://i.imgur.com/video-thumbnail.jpg"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right: Scrollable Text Box */}
        <div >
          <ScrollableTextBox markdownText={markdownContent}/>
        </div>

        {/* Modal Button below the content */}
      </div>
        <div className="mt-6 justify-center flex">
          <ObfuscationModal />
        </div>
    </div>
  );
};

export default ObfuscationPage;