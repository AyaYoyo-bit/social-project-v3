import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<void>();
  @Output() likeClicked = new EventEmitter<void>();  // لإرسال حدث الضغط على زر اللايك

  onDelete() {
    this.delete.emit();
  }

  onLikeClick() {
    this.likeClicked.emit();  // إرسال الحدث فقط بدون تعديل الحالة
  }
}







