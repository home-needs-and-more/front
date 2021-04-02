import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobModule } from '../Job/job/job.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WorkRequestsModule { 
  id: number;
  jobId: number;
  email: string;
  phoneNumber: string;
  description: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  workState: string;
  job: JobModule;
}
