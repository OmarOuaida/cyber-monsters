import React from "react";
import myVideo from "../../assets/deception.mp4";
import ScrollableTextBox from "../../components/ScrollableTextBox";
import DeceptionModal from "../../modals/DeceptionModal";
const markdownContent = `
# Deception & Disguise

In *Monsters, Inc.*, deception isn’t just a one-off accident — it’s a calculated tactic used by Randall to achieve his own goals. Randall creates fake scenarios, manipulates the door system, and even cloaks himself to stay invisible. His goal? To secretly extract screams from children using an illegal scream extractor — and no one suspects him until it’s almost too late.

This highlights a crucial cybersecurity principle: **social engineering** and **deceptive behaviour** are powerful tools for attackers. Randall doesn’t rely on brute force. He uses trust, secrecy, and misinformation to gain access, hide his intentions, and move through the organisation undetected.

Randall's deception works because of two key factors: **lack of oversight** and **assumed trust**. He exploits gaps in monitoring and the belief that someone in the organisation couldn't possibly be the villain. In real life, this mirrors how phishing attacks, impersonation, and insider threats operate — by gaining your trust before exploiting it.

Another great moment is when Boo disguises herself as a little monster to avoid detection. While this is played for laughs, it reflects a real-world tactic called **spoofing** — pretending to be someone or something else to gain access. Whether it’s a fake email address, a forged badge, or a masked IP address, deception lets attackers slip through unnoticed.

These tactics work because they manipulate **human psychology**. Curiosity, urgency, fear, or misplaced trust can all lead to someone clicking a malicious link or letting someone into a secure area. That’s why awareness and verification are so critical.

# Key Concepts

- **Deception**: The act of misleading others to gain access or avoid detection.
- **Social Engineering**: Tricking people into giving up information or access.
- **Insider Threats**: Trusted individuals who misuse their access.
- **Spoofing**: Pretending to be something you're not (a person, device, or website).
- **Psychological Manipulation**: Exploiting trust, fear, or urgency to trigger mistakes.
- **Verification**: Always double-check identities and sources before acting.

# Real-World Parallels

- Phishing emails posing as banks or managers
- Fake caller ID or masked IP addresses
- Employees clicking suspicious links without checking
- Tailgating into secure offices by pretending to "forget a badge"

> Deception is dangerous because it doesn't *look* like a threat — until it's already inside the system.
`;

const DeceptionPage = () => {
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
          <DeceptionModal />
        </div>
    </div>
  );
};

export default DeceptionPage;