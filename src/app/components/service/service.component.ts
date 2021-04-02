import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import { WorkRequestsService } from '../../services/work-requests/work-requests.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {JobModule} from '../../model/Job/job/job.module';
import {WorkRequestsModule} from '../../model/work-requests/work-requests.module'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  closeResult = '';
  services : any;
  selectedService:any;
  workRequestForm : WorkRequestsModule;
  jobId: number;
  email: string;
  phoneNumber: string;
  description: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  job: JobModule;
  constructor(private jobsService : JobsService,private WorkRequestsService : WorkRequestsService,private modalService: NgbModal) { }

  ngOnInit(): void {
     this.jobsService.getAll().subscribe(data => {
      console.log(data);
      this.services=data;
    });
    
  }
  open(content,service) {
    console.log(service);
    this.selectedService=service;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  createWorkRequest(){
    if(this.phoneNumber[0]!='+')
      this.phoneNumber='+1'+this.phoneNumber;
    this.WorkRequestsService.create({
      jobId: this.selectedService.id,
      email: this.email,
      phoneNumber: this.phoneNumber,
      description: this.description,
      street: this.street,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      job: this.selectedService
    })
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
