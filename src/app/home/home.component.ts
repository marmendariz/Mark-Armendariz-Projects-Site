import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})

export class HomeComponent {

  projects: any[]; ////////////FIX THIS
  dataService: DataService;

  constructor(private data: DataService) { 
    this.dataService = data;
  }

  ngOnInit() {
    this.dataService.getAllProjects().subscribe((data: any[]) => {this.projects = data});
  }


}
