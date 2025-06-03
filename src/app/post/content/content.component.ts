import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: 'content.component.html'
})
export class PostContentComponent {
  @Input() content = '';
  @Input() liked = false;
  @Output() likeToggled = new EventEmitter<void>();

  onLikeClick() {
    this.likeToggled.emit();
  }
}

