import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component'

@Component({
  selector: 'tr[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() employee:any;
  @Input() index:any;

  constructor(private hello_world:HelloWorldComponent) { }

  helloworld = this.hello_world;
  
  ngOnDestroy(): void {
    console.log('Employee Deleted');
    console.log(this.employee);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Employee Updated');
    console.log(this.employee);
  }

  ngOnInit(): void {
  }
}
