import React from "react";
import myVideo from "../../assets/weakest-link2.mp4";
import ScrollableTextBox from "../../components/ScrollableTextBox";
import WeakestLinkModal from "../../modals/WeakestLinkModal";

const markdownContent = `
# Weakest Link: When Monsters Make Mistakes

In *Monsters, Inc.*, one of the biggest security breaches in the entire film doesn’t come from a malicious villain or a rogue human — it comes from Sully, a top employee, who unintentionally brings a child (Boo) into the monster world. It’s a classic example of how even trusted individuals can become the weakest link in a secure system.

This wasn’t sabotage. Sully was just following up on an anomaly — a misplaced door — but in the process, he failed to follow protocol. He didn’t report the door, didn’t scan the area properly, and assumed everything was fine. That small moment of oversight led to a massive security breach. Monsters believed human children were toxic — and Boo’s presence caused widespread panic and a full lockdown.

In cybersecurity (and real life), this is known as **user error** — when a person accidentally exposes a system to risk. It’s not usually malicious, just unintentional: clicking a phishing link, misconfiguring a setting, using a weak password. But the result can be catastrophic.

Sully’s mistake highlights how even well-meaning team members can bypass systems — not because they want to cause harm, but because they’re unaware of the risk or don’t follow procedures closely. This is why building a strong **security culture** is so critical. It’s not enough to have high walls if someone leaves the gate open.

The aftermath also shows another key principle: **the importance of detection and escalation**. Once the error was discovered, the CDA (Child Detection Agency) didn’t ignore it — they responded immediately, mobilising a full force to contain the issue. The problem wasn’t that Sully made a mistake — it was that the system had to be robust enough to catch and respond to it fast.

Security isn’t just about keeping out bad actors — it’s about recognising that mistakes happen and having systems in place to catch them before they escalate.

# Key Concepts

- **Human Error**: Unintentional mistakes that can expose systems to risks.
- **Weakest Link**: The idea that security is only as strong as the least careful user.
- **Protocol Violation**: Skipping steps or procedures can lead to vulnerabilities.
- **Detection & Response**: Systems must identify and react quickly to errors.
- **Security Culture**: Empowering everyone to understand their role in keeping systems safe.

# Real-World Parallels

- **In IT**: Admin accidentally deletes critical files, disables firewalls, or ignores updates.
- **In workplaces**: Clicking phishing emails or losing unencrypted USB drives.
- **In hospitals**: Forgetting to log out of shared systems or mislabelling samples.

> The scariest threats aren’t always villains — sometimes, they’re just trusted team members making honest mistakes.
`;

const WeakestLinkPage = () => {
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
          <WeakestLinkModal />
        </div>
    </div>
  );
};

export default WeakestLinkPage;