import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  @Input() projectId  : string;
  @Input() projectName: string;
  @Input() projectDesc: string;
  @Input() isWebsite  : boolean;
  @Input() projectUrl: string;
  @Input() detailPoints: string[];
  background: string;

  constructor() { 
  }

  ngOnInit() {
  }

  //ngOnChanges(changes: SimpleChanges) {
  //  console.log("markmarkmarkmarkmarkmarkmarkmark");
  //  this.setBackground(changes.projectId.currentValue);
  //}

  setBackground(projectId: String) {
    console.log(projectId);
    //this.background: "red";
    //this.background = "linear-gradient(red, red), url('assets/img/sample-img-01.jpg')";
    /*
    linear - gradient(map - get($COLOR_WHEEL, yellow),
      map - get($COLOR_WHEEL, yellow)),
      url("assets/img/sample-img-01.jpg");
      */
  }

}
