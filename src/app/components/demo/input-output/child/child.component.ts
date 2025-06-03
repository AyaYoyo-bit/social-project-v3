import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() helloworld = new EventEmitter<string>();

  onclick() {
    this.helloworld.emit("goodby");
  }
}
