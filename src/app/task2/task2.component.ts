import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  showButton = false;
  showingList:number[] = [];

  showButtonF(){
    this.showButton = !this.showButton;
    this.showingList.push(this.showingList.length+1);
  }


}
