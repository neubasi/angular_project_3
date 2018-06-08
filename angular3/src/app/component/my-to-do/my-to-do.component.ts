import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-to-do',
  templateUrl: './my-to-do.component.html',
  styleUrls: ['./my-to-do.component.css']
})
export class MyToDoComponent implements OnInit {

  constructor() { }

  todo = [];
    newtodo ="";
    index="";
    openToDoList = false;
  
    addToDo = function(){
      if(this.newtodo !="")
      this.todo.push(this.newtodo)
      this.openToDoList = false;
      this.newtodo ="";
    }
  
    removeToDo = function(index){
      this.todo.splice(index,1)
      console.log(index);
    }
  
    openToDo = function(){
      this.openToDoList = true;
    }

    

  ngOnInit() {
  }

}
