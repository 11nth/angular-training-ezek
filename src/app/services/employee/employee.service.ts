import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any = [
    {
      'name':'Ezek',
      'gender':'Male',
      'title':'Developer',
      'tenure':'No',
      'salary':1,
      'show':true
    }
  ];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(name:string, gender:string, title:string, tenure:string, salary:string, show:string) {
    const Employee = {
      name:name,
      gender:gender,
      title:title,
      tenure:tenure,
      salary:salary,
      show:show,
    };
    this.employees.push(Employee);
  }

  updateEmployee(name:string, gender:string, title:string, tenure:string, salary:string, show:string, index:any) {
    const Employee = {
      name:name,
      gender:gender,
      title:title,
      tenure:tenure,
      salary:salary,
      show:show
    };
    this.employees[index].name = Employee.name;
    this.employees[index].gender = Employee.gender;
    this.employees[index].title = Employee.title;
    this.employees[index].tenure = Employee.tenure;
    this.employees[index].salary = Employee.salary;
  }

  deleteEmployee(index:any) {
    this.employees.splice(index, 1);
  }
}
