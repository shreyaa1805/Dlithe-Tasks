import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course=[
  {'id':1, 'name':'Angular', 'description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.','image':'../../assets/angular.png'},
  {'id':2, 'name':'JavaScript', 'description':'Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers','image':'../../assets/javascript.png'},
  {'id':3, 'name':'SQL', 'description':'SQL is Structured Query Language, which is a computer language for storing, manipulating and retrieving data stored in a relational database.','image':'../../assets/sql.jpg'},
  {'id':4, 'name':'JAVA', 'description':'Java can be used to build applications for a wide range of platforms','image':'../../assets/java2.png'},
  
]
}
