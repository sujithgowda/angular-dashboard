import { Component, ViewChildren, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDragEnter,
CdkDragExit} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren('mywidg', { read: ElementRef }) mywidgs; 
  title = 'demo-bank-app';
  widgetsList: any = [[{name:'a', sortOrder:0}], 
  [{name:'b', sortOrder:1}], 
  [{name:'c', sortOrder:2}], 
  [{name:'d', sortOrder:3}]];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let prev = Object.assign({}, event.previousContainer.data);
      let cur = Object.assign({}, event.container.data);
      let prevIndex = event.previousContainer.data[0].sortOrder;
      let currIndex = event.container.data[0].sortOrder;
      transferArrayItem(this.widgetsList,
        this.widgetsList,
        prevIndex,
        currIndex);
      event.previousContainer.data[0].sortOrder = currIndex;
      if(prevIndex>currIndex){
        currIndex=currIndex+1;
      }
      else {
        currIndex = currIndex-1;
      }
      transferArrayItem(
        this.widgetsList,
        this.widgetsList,        
        currIndex,
        prevIndex);
      event.container.data[0].sortOrder = prevIndex;
    }
  }
  dropListEntered(event:CdkDragEnter){
    setTimeout(() => {
      let prev = Object.assign({}, event.item.data);
    let cur = Object.assign({}, event.container.data);
    let prevIndex = event.item.data.sortOrder;
    let currIndex = event.container.data[0].sortOrder;
    transferArrayItem(this.widgetsList,
      this.widgetsList,
      prevIndex,
      currIndex);
    event.item.data.sortOrder = currIndex;
    event.container.data[0].sortOrder = prevIndex;
    if(prevIndex>currIndex){
      currIndex=currIndex+1;
    }
    else {
      currIndex = currIndex-1;
    }
    transferArrayItem(
      this.widgetsList,
      this.widgetsList,        
      currIndex,
      prevIndex);
 
    });
  }
  dropListExited(event:CdkDragExit){
    setTimeout(() => {
      let prev = Object.assign({}, event.item.data);
    let cur = Object.assign({}, event.container.data);
    let prevIndex = event.item.data.sortOrder;
    let currIndex = event.container.data[0].sortOrder;
    transferArrayItem(this.widgetsList,
      this.widgetsList,
      prevIndex,
      currIndex);
    event.item.data.sortOrder = currIndex;
    event.container.data[0].sortOrder = prevIndex;
    if(prevIndex>currIndex){
      currIndex=currIndex+1;
    }
    else {
      currIndex = currIndex-1;
    }
    transferArrayItem(
      this.widgetsList,
      this.widgetsList,        
      currIndex,
      prevIndex);
 
    });
  }
}
