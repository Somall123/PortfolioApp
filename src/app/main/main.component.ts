import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {

  featuredProject={} as Project;
constructor(private titleService:Title,private projectService:ProjectsService)
{
  this.titleService.setTitle("Davit Eliashvili-Main Page")
}
  ngOnInit(): void {
  this.featuredProject=this.projectService.getProjectById(0)
  }
}
