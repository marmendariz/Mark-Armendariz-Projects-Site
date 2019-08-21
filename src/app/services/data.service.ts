import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable()

export class DataService {

  projects: object[] = [];
  
  constructor(private http: HttpClient) {
  }

  getAllProjects(){
    return this.http.get("assets/project-data.json");  
  }

  getProject(projectId: string){
    return this.http.get("assets/project-"+projectId+".json");
  }

  getProjectMock(projectId: string) {
    if (projectId) {
      var x = this.projects.filter((p) => { return p['id'] == projectId });
      return x[0];
    }
    return {};
  }

  getAllProjectsMock() {
    return this.projects;
  }



}
