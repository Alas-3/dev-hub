// components/SidePanel.jsx
import React from 'react';

const sections = [
  { title: "Documentation Links", id: "documentation-links" },
  { title: "UI Component Libraries", id: "ui-component-libraries" },
  { title: "Icon Packs", id: "icon-packs" },
  { title: "BaaS and SaaS Platforms", id: "baas-saas-platforms" },
  { title: "Design Components and Illustrations", id: "design-components" },
  { title: "Other Tools and Resources", id: "other-tools-resources" }
];

const SidePanel = ({ isOpen, onClose }) => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 1024) { // Close sidebar on mobile after click
        onClose();
      }
    }
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          className="lg:hidden p-2 text-white"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className="block p-4 text-gray-300 hover:bg-gray-700 w-full text-left"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
