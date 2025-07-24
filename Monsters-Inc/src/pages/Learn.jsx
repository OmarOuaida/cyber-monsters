const learnItems = [
  {
    title: "Explore Codes and Protocols",
    subtitle: "Learn about classic and modern encryption methods",
    image: "../../../public/assets/mike1.jpg",
    path: "/learn/codes",
  },
  {
    title: "Explore Weakest Link",
    subtitle: "Understand how human (or monster) error becomes a threat",
    image: "../../../public/assets/mike2.jpg",
    path: "/learn/weakest-link",
  },
  {
    title: "Explore Social Engineering and Deception",
    subtitle: "How attackers manipulate people (or monsters!), not just machines",
    image: "../../../public/assets/mike3.jpg",
    path: "/learn/deception",
  },
  {
    title: "Explore Passwords and Authentication",
    subtitle: "What makes a password strong — and what doesn’t",
    image: "../../../public/assets/mike4.jpg",
    path: "/learn/passwords",
  },
  {
    title: "Explore Obfuscation",
    subtitle: "Hiding in plain sight — protecting data vs malicious access",
    image: "../../../public/assets/mike5.jpg",
    path: "/learn/obfuscation",
  },
];

import { Link } from "react-router-dom";

const LearnPage = () => {
  return (
    <div className="h-full w-full bg-gray-50 flex justify-center overflow-auto p-23">
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {learnItems.map((item, idx) => (
          <Link
            to={item.path}
            key={idx}
            className="flex items-center rounded-lg bg-white p-5 shadow border border-gray-200 hover:bg-gray-100 transition"
          >
            <img
              alt={item.title}
              src={item.image}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
            <div>
              <h6 className="font-semibold text-gray-800">{item.title}</h6>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;