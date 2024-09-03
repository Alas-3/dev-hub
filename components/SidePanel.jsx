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
      // Scroll to element's top directly without offset
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Optionally close sidebar on mobile
      if (window.innerWidth < 1024) { 
        onClose();
      }
    }
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-r from-purple-500 to-blue-500 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <button
            className="lg:hidden p-2 text-white"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className="mt-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className="block p-4 w-full text-left transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 backdrop-blur-sm"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
