import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects={} as Project[];
  searchText = '';

  isCollapsed:boolean=true;
  typescript:boolean=false;
  angular:boolean=false;
  nodejs:boolean=false;
  java:boolean=false;
  clang:boolean=false;
  python:boolean=false;
  asp:boolean=false;
  react:boolean=false;
  constructor(private titleService:Title,private projectService:ProjectsService)
  {
    this.titleService.setTitle(`Davit Eliashvili-Portfolio`)
  }
  ngOnInit(): void {
    this.projects=this.projectService.getProjects();
  }
  filter(){
    let filterTags :Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.clang){
      filterTags.push(Tag.CPLUSPLUS,Tag.CSHARP)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.asp){
      filterTags.push(Tag.ASPNET)
    }
  
    this.projects=this.projectService.GetProjectsByFilter(filterTags)
  }
  
}
