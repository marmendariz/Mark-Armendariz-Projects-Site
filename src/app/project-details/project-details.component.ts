import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [DataService]
})
export class ProjectDetailsComponent implements OnInit {

  project: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DataService
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var tempObservable = this.service.getProject(params.get("id"));
      tempObservable.subscribe(d => this.project = d);
    });

  }



}
