import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {  
  message = 'henwo warudo';
  color = 'red';
  isBig = true;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  class_chuchu = '';

  // employee
  name = '';
  gender = '';
  title = '';
  tenure = '';
  salary = '';
  show = '';
  len = 1;
  employees:any = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  // switchSize(yeet:any) {
  //   this.isBig = !this.isBig;
  //   this.class_chuchu = yeet;
  // }

  // switchDisplay() {
  //   this.isDisplayed = !this.isDisplayed;
  // }

  // displayAlert() {
  //   alert(this.alertMessage);
  // }

  fetchEmployees() {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(name:string, gender:string, title:string, tenure:string, salary:string, show:string) {
    this.employeeService.addEmployee(name, gender, title, tenure, salary, show);
    this.clearEmployeeInputs();
    this.len += 1;
  }

  updateEmployee(name:string, gender:string, title:string, tenure:string, salary:string, show:string, index:any) {
    this.employeeService.updateEmployee(name, gender, title, tenure, salary, show, index);
    this.clearEmployeeInputs();
  }

  deleteEmployee(index:any) {
    this.employeeService.deleteEmployee(index);
    this.len -= 1;
  }

  clearEmployeeInputs() {
    this.name = '', this.gender = '', this.title = '', this.tenure = '', this.salary = '', this.show = ''
  }
}
