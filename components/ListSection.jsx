import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { documentationLinks, uiComponentLibraries, iconPacks, baasAndSaasPlatforms, designComponents, otherToolsAndResources } from '../data/list';

const ListSection = () => {
  const sections = [
    { title: "Documentation Links", data: documentationLinks, id: "documentation-links" },
    { title: "UI Component Libraries", data: uiComponentLibraries, id: "ui-component-libraries" },
    { title: "Icon Packs", data: iconPacks, id: "icon-packs" },
    { title: "BaaS and SaaS Platforms", data: baasAndSaasPlatforms, id: "baas-saas-platforms" },
    { title: "Design Components and Illustrations", data: designComponents, id: "design-components" },
    { title: "Other Tools and Resources", data: otherToolsAndResources, id: "other-tools-resources" }
  ];

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700"
        >
          <h2 className="text-xl sm:text-2xl text-blue-400 font-bold mb-4 pb-2 border-b border-gray-700">
            <span className="text-crimson-400">&lt;</span>
            {section.title}
            <span className="text-crimson-400">/&gt;</span>
          </h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {section.data.map((item, idx) => (
              <Card key={idx} name={item.name} link={item.link} logoUrl={item.logoUrl} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ListSection;