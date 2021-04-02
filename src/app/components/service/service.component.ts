import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {JobModule} from '../../model/Job/job/job.module';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  closeResult = '';
  services : any;
  constructor(private jobsService : JobsService,private modalService: NgbModal) { }

  ngOnInit(): void {
     this.jobsService.getAll().subscribe(data => {
      console.log(data);
      this.services=data;
    });
    
  }
  open(content,service) {
    console.log(service);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
