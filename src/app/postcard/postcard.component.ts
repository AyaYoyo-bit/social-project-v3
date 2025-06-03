import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostCardComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<void>();
  @Output() likeClicked = new EventEmitter<void>(); // ⬅️ إخراج الحدث فقط

  onDelete() {
    this.delete.emit();
  }

  onLikeClick() {
    this.likeClicked.emit();  // ⬅️ ما بنعدلش في اللايك، بس بنبعت حدث
  }
  
  toggleLike() {
  this.post.liked = !this.post.liked;
}
}

