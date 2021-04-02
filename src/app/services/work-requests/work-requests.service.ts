import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { WorkRequestsModule } from '../../model/work-requests/work-requests.module';
@Injectable({
  providedIn: 'root'
})
export class WorkRequestsService {
workRequestsRouteBaseUrl = environment.SERVER_BASE_URL + '/work-requests'
workRequestsServicesRoute = {
  getAll: this.workRequestsRouteBaseUrl,
  create: this.workRequestsRouteBaseUrl,
  getById: this.workRequestsRouteBaseUrl+'/:id',
  update: this.workRequestsRouteBaseUrl+'/:id',

}
constructor(private http: HttpClient) { }

getAll() {
  this.http.get(this.workRequestsServicesRoute.getAll).subscribe(data => {
    return data;
  })
}
create(newWorkRequests : WorkRequestsModule) {
  this.http.post(this.workRequestsServicesRoute.create,newWorkRequests).subscribe(data => {
    return data;
  })
}
update(WorkRequestsUpdated : WorkRequestsModule) {
  if(!WorkRequestsUpdated)
    return false
  const idJobToUpdate = WorkRequestsUpdated.id;
  this.http.put(this.workRequestsServicesRoute.update.replace(':id',idJobToUpdate.toString()),WorkRequestsUpdated).subscribe(data => {
    return data;
  })
}
}
