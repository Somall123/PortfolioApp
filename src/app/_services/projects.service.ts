import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects:Project[]=[
    {
    id: 0,
    name: "Angular Applications",
    summary: 'JavaScript-based web framework',
    decription: 'The Peson Has Worked On Many Angular Projects And You Can See Everything About It',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/angular/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png","../../assets/imgsofprojects/angular/1_bMgQ8MhbnQexpqHgIgBJPA.png","../../assets/imgsofprojects/angular/Angular-1.jpg"],
    tags:[Tag.ANGULAR,Tag.TYPESCRIPT,Tag.JAAVSCRIPT]
  },
  {
    id: 1,
    name: "Python Projects",
    summary: 'Versatile, popular programming language.',
    decription: 'The Python is the new language for the person,but,he already has got some great features',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/pyth/1707479606569.jpg","../../assets/imgsofprojects/pyth/download.png","..//../assets/imgsofprojects/pyth/Python-projects-1.png"],
    tags:[Tag.PYTHON]
  },
  {
    id: 2,
    name: "Projects On C Languages",
    summary: 'Low-level, powerful programming languages.',
    decription: 'C++ and C# were first languages for the person, you can see his features since the start',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/c/c-language-popularity-hero-1656157177576.webp","../../assets/imgsofprojects/c/C-language.jpg","../../assets/imgsofprojects/c/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter.png"],
    tags:[Tag.CPLUSPLUS,Tag.CSHARP]
  },
  {
    id: 3,
    name: "Things About Node Js",
    summary: 'JavaScript runtime for servers.',
    decription: 'Node JS is the weakest part of the persons skills,you can give him some advices',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/nodejs/nodejs-reference-architecture_2x.png","../../assets/imgsofprojects/nodejs/parts_of_nodejs.avif","../../assets/imgsofprojects/nodejs/why-use-nodejs.png"],
    tags:[Tag.NODEJS,Tag.JAAVSCRIPT]
  },
  {
    id: 4,
    name: "Projets On Java",
    summary: 'Robust, platform-independent language.',
    decription: 'Java programming is the forgotten path for the person,but you can still review his works',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/java/clean-code-java-principles.jpg","../../assets/imgsofprojects/java/consulting-blog-09.webp","../../assets/imgsofprojects/java/java-emergency-upgrade-installers-showcase_image-2-p-2057.jpg"],
    tags:[Tag.JAVA]
  },
  {
    id: 5,
    name: "Learning React",
    summary: 'JavaScript library for UIs.',
    decription: 'Cause Of Its Popularity And usefulness,The Person has decided to learn a new framework,see his latest features',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/react/9d0a6780-394a-11eb-9fd1-6296a684b124.jpg","../../assets/imgsofprojects/react/complete-guide-react-refs.avif","../../assets/imgsofprojects/react/what-is-react-js-feature-image-1200x675.png"],
    tags:[Tag.REACT,Tag.JAAVSCRIPT]
  },
  {
    id: 6,
    name: "ASPNET",
    summary: 'Web development framework. Scalable and versatile.',
    decription: 'ASPNET is the newest feature for the autor and he is still learning',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/asp/aspnet-featured.png","../../assets/imgsofprojects/asp/NET.png","../../assets/imgsofprojects/asp/Top-5-benefits-of-using-ASPNET-Core.jpg"],
    tags:[Tag.ASPNET,Tag.ANGULAR]
  },
  {
    id: 7,
    name: "VueJs Projects",
    summary: 'JavaScript frontend framework. Reactive and efficient',
    decription: 'Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. Known for its simplicity and ease of use, it offers a reactive data-binding system that makes it easy to handle dynamic content',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/vuejs/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg","../../assets/imgsofprojects/vuejs/A-Step-By-Step-Guide-to-Server-Side-Rendering-with-VueJS.png","../../assets/imgsofprojects/vuejs/vue.js-development.jpg"],
    tags:[Tag.VUEJS,Tag.JAAVSCRIPT]
  },
  {
    id: 8,
    name: "Projects On C Languages",
    summary: 'Low-level, powerful programming languages.',
    decription: 'C++ and C# were first languages for the person, you can see his features since the start',
    projectLink: 'https://github.com/',
    pictures: ["../../assets/imgsofprojects/c/c-language-popularity-hero-1656157177576.webp","../../assets/imgsofprojects/c/C-language.jpg","../../assets/imgsofprojects/c/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter.png"],
    tags:[Tag.CPLUSPLUS,Tag.CSHARP]
  },

  ]
  constructor() {}
  getProjects()
  {
    return this.projects;
  }
  getProjectById(id:number):Project
  {
    let project=this.projects.find(project=>project.id===id);
    if(project==undefined)
      {
        throw new TypeError('There is no project matching id'+id);
      }      return project;
  }
  GetProjectsByFilter(filterTags:Tag[])
  {
let filterProjects:Project[]=[];

this.projects.forEach(function(project){
let FoundAll=true;
filterTags.forEach(function(filterTags){
  if(project.tags.includes(filterTags)==false)
    {
      FoundAll=false;
    }
});
if(FoundAll)
  {
    filterProjects.push(project)
  }
});
return filterProjects;
  }

}
