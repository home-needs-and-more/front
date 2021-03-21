import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';
import {JobModule} from '../../model/Job/job/job.module';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services = [{
    name : "PAINTING",
    price : "2,29",
    image : "157522576_754810258793830_1658028758824288167_n.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    name : "PAINTING",
    price : "2,29",
    image : "157522576_754810258793830_1658028758824288167_n.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  }]
  constructor(private jobsService : JobsService) { }

  ngOnInit(): void {
    var job = new JobModule;
    job.name = 'from front angular updated';
    job.id = 6;
    this.jobsService.update(job);
  }

}
