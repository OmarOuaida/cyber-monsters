import React from "react";
import myVideo from "../../assets/codes.mp4";
import ScrollableTextBox from "../../components/ScrollableTextBox";
import CodesModal from "../../modals/CodesModal";

const markdownContent = `
# Codes & Protocols

In Monsters, Inc., when someone shouts, “We’ve got a 2319!”, it instantly triggers a Red Alert — alarms sound, agents rappel from the ceiling, and a sock (gasp!) is destroyed in a frenzy of hazmat-suited action. It’s one of the most iconic scenes in the film, but beneath the humour lies a serious lesson in real-world security and incident response.

The number 2319 isn’t random — it’s a coded alert, a system used to quickly communicate a specific type of threat. In this case, it signals that a human object (a sock) has entered the monster world — a huge contamination risk for them. Similarly, real-world organisations use coded alerts to classify emergencies without causing panic. For instance, “Code Red” often signals fire, while “Code Black” might refer to a bomb threat. These codes allow for rapid, discreet communication across teams trained to respond in specific ways.

The accompanying Red Alert reinforces the urgency and severity of the situation. In cybersecurity and emergency management, a Red Alert indicates the highest level of threat, requiring immediate response. Think of it like DEFCON 1 in military terms, or an “all systems compromised” state in an IT department. It means: stop everything — this is serious.

This whole scene is a dramatised example of a well-executed incident response protocol. In cybersecurity, an incident response plan is a step-by-step process to detect, contain, eliminate, and recover from a threat like a malware outbreak, data breach, or unauthorised access. The CDA’s fast, coordinated action mimics this — identify the threat (sock), isolate it (quarantine the monster), eliminate it (sock is gone), and restore safety (disinfect and release the monster).

There’s also a strong parallel to access control and contamination containment. Just like the CDA prevents anything from escaping the affected area, IT systems isolate infected devices to prevent network-wide damage. In hospitals, similar procedures protect sterile zones. It’s all about stopping the spread of danger.

And let’s not forget situational awareness — everyone in the factory instantly knows what 2319 and Red Alert mean. That’s what security culture looks like: shared knowledge, clear protocols, and fast action. In schools, workplaces, or online, the same principle applies — knowing what a suspicious link looks like, how to report a breach, or when to activate 2FA (two-factor authentication) can make all the difference.

# Key Concepts

- **Coded Alerts**: Predefined codes that signal emergencies (like "Code Red" or “2319”).
- **Red Alert**: A high-level warning requiring urgent, immediate action.
- **Incident Response**: A step-by-step plan to detect, contain, and recover from security threats.
- **Access Control**: Restricting who can enter or access certain areas or systems.
- **Threat Containment**: Isolating threats to stop them from spreading.
- **Situational Awareness**: Staying alert and knowing how to identify and act on security threats.
- **Security Culture**: When everyone in a team knows how to help keep systems safe.

# Real-World Parallels

- In hospitals: \`Code Blue\`, \`Code Red\`
- In cybersecurity: \`Red Alert\` = critical breach
- In networks: infected machines get quarantined

> Security isn't just about tech. It's about people knowing what to do — just like the monsters knew exactly how to respond to a 2319.
`;

const CodesPage = () => {
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
          <CodesModal />
        </div>
    </div>
  );
};

export default CodesPage;