import React from "react";
import myVideo from "../../assets/passwords.mp4";
import ScrollableTextBox from "../../components/ScrollableTextBox";
import PasswordsModal from "../../modals/PasswordsModal";


const markdownContent = `
# Passwords & Authentication

In this scene Mike Wazowski **steals another monster’s keycard** to access a restricted area. He casually lifts it from the monster’s pocket, swipes into the secure zone, and continues like nothing happened. It’s funny in the movie — but in the real world, it’s a serious breach of security.

That keycard represents a form of **authentication** — it tells the system, “I’m allowed in here.” But when Mike steals the card, the system can’t tell the difference. It assumes the cardholder is legitimate. This is why relying on just *one factor* — like a password or a card — is risky. If someone else gets hold of it, they can pretend to be you.

This scene highlights the dangers of **credential theft** and why **multi-factor authentication (MFA)** is so important. Imagine if the door required not just a card swipe, but also a voice scan or a code sent to the monster’s personal communicator. Mike wouldn't have gotten in so easily.

The monster whose card gets stolen also makes a critical mistake: **he wasn’t paying attention to his credentials**. Whether it’s a keycard, password, or personal device, security tools only work if we **protect them**. Leaving a keycard in an open pocket is like writing your password on a sticky note and leaving it on your desk — you’re making it easy for someone like Randall (or Mike) to exploit.

The takeaway? In both monster and human workplaces, **access control** only works if credentials are kept secure, verified regularly, and supported by other security layers. Otherwise, the door might open to the wrong monster.

# Key Concepts

- **Credential Theft**: When someone steals your password, keycard, or login method.
- **Authentication**: Proving you are who you say you are.
- **Multi-Factor Authentication (MFA)**: Using more than one method to verify identity (e.g. keycard + code).
- **Access Control**: Making sure only authorised users can enter secure spaces.
- **Security Awareness**: Staying alert and keeping your credentials safe.

# Real-World Parallels

- Mike stealing a card = someone using a stolen password
- Unattended keycard = exposed login details
- Systems that only require one factor = easier to bypass
- MFA (keycard + PIN) = much harder to trick

> In both worlds, your credentials are the keys to the kingdom — guard them like your door depends on it.
`;

const PasswordsPage = () => {
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
          <PasswordsModal />
        </div>
    </div>
  );
};

export default PasswordsPage;