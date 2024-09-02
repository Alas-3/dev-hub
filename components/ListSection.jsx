import React from 'react';
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
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {section.data.map((item, idx) => (
              <Card key={idx} name={item.name} link={item.link} logoUrl={item.logoUrl} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSection;
