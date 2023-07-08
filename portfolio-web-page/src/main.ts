import tools from './data/Tools.json';
import { ICategory, ITool } from './types';

const toolsContainer = document.querySelector(".tools_container")!;
const fragment = document.createDocumentFragment();
const toolsTemplate = document.querySelector("#tool-template")! as HTMLTemplateElement;

const { Tools } : { Tools: ICategory[] } = tools;

Tools.forEach( (tool: ICategory) =>{
  const clone = toolsTemplate.content.cloneNode(true) as HTMLDivElement;
  
  clone.querySelector(".template__title")!.innerHTML = tool.category;
  
  tool.skills.forEach( (skill: ITool) =>{
  
    const img = document.createElement("img");
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
  
    img.className = "img";
    figure.className = "figure";
  
    const skillContainer = clone.querySelector(".skill__container");

    img.setAttribute("src", skill.logo);
    img.setAttribute("alt", skill.name);

    figcaption.innerHTML = skill.name;

    figure?.appendChild(img);
    figure?.appendChild(figcaption);
    skillContainer?.appendChild(figure);
  });

  fragment.appendChild(clone);
});

toolsContainer.appendChild(fragment);