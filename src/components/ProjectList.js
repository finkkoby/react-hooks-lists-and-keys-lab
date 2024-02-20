import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let projArr = projects.map(object => {
    return <ProjectItem name={object.name} about={object.about} technologies={object.technologies} key={object.id}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projArr}</div>
    </div>
  );
}

export default ProjectList;
