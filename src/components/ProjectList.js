import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  
  const projList = projects.map((proObj) => {
    return <ProjectItem  name={proObj.name} about={proObj.about} key={proObj.id} technologies={proObj.technologies} />
  });
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projList}

      </div>
    </div>
  );
}

export default ProjectList;
