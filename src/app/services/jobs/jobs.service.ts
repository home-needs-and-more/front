import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { JobModule } from '../../model/Job/job/job.module';
@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobsRouteBaseUrl = environment.SERVER_BASE_URL + '/jobs'
  jobsServicesRoute = {
    getAll: this.jobsRouteBaseUrl,
    create: this.jobsRouteBaseUrl,
    getById: this.jobsRouteBaseUrl+'/:id',
    delete: this.jobsRouteBaseUrl+'/:id',
    update: this.jobsRouteBaseUrl+'/:id',

  }
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.jobsServicesRoute.getAll);
  }
  create(newJob : JobModule) {
    this.http.post(this.jobsServicesRoute.create,newJob).subscribe(data => {
      return data;
    })
  }
  delete(jobToDelete : JobModule) {
    if(!jobToDelete)
      return false
    const idJobToDelete = jobToDelete.id;
    this.http.delete(this.jobsServicesRoute.delete.replace(':id',idJobToDelete.toString())).subscribe(data => {
      return data;
    })
  }
  update(jobUpdated : JobModule) {
    if(!jobUpdated)
      return false
    const idJobToUpdate = jobUpdated.id;
    this.http.put(this.jobsServicesRoute.update.replace(':id',idJobToUpdate.toString()),jobUpdated).subscribe(data => {
      return data;
    })
  }
}
