import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  isWorkExperienceOpened:boolean=false;
  IsUniversityOpened:boolean=false;
  isSkillsOpened:boolean=false;
  isRequirOpened:boolean=false;
  isSchoolOpened:boolean=false;
  isGradeOpened:boolean=false;



  constructor(private titleService:Title,private renderer:Renderer2)
  {
    this.titleService.setTitle("Davit Eliashvili-Resume")
  }
  DownloadFile(){
    const link=this.renderer.createElement('a');
    link.setAttribute('href','../../assets/Resume.pdf');
    link.setAttribute('download','Resume.pdf');
    link.click();
    link.remove();

  }
}
