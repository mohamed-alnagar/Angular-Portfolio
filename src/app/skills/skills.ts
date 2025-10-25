import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    { name: 'C++', icon: 'assets/icons/cpp.png', desc: 'Strong in algorithms and OOP' },
    { name: 'JavaScript', icon: 'assets/icons/js.png', desc: 'Web development and scripting' },
    { name: 'HTML', icon: 'assets/icons/html.png', desc: 'Markup language for web pages' },
    { name: 'CSS', icon: 'assets/icons/css.png', desc: 'Styling web pages' },
    { name: 'Angular', icon: 'assets/icons/angular.png', desc: 'Frontend framework' },
    { name: 'Node.js', icon: 'assets/icons/node.png', desc: 'Backend development and APIs' }
  ];
}
