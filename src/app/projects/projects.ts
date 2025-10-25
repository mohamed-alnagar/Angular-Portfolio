import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Hotel Management System',
      desc: 'A full-featured hotel system with room booking, billing, and client feedback.',
      image: 'assets/images/hotel.jpg'
    },
    {
      title: 'Lost & Found Application',
      desc: 'An app to help users report and find lost items easily using GPS and filters.',
      image: 'assets/images/lost-image.jpg'
    },
    {
      title: 'Campaings Website',
      desc: 'Built using HTML , CSS , JS and Json.',
      image: 'assets/images/college.jpg'
    },
     {
      title: 'ICT Planning for Green Hospital',
      desc: 'including Hardware - Software [Arduio , C , Wersite [HTML , CSS ,JS]].',
      image: 'assets/images/college.jpg'
    },

  ];
}
export class Projects { }
