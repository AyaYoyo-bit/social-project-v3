import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostFormComponent {
  postForm: FormGroup;

  @Output() postCreated = new EventEmitter<Post>(); // ⬅️ نبعَت البوست للأب

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      userName: ['', Validators.required],
      userImage: ['', Validators.required],
      content: ['', Validators.required],
      postImage: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost: Post = {
        ...this.postForm.value,
        liked: false,
        createdAt: new Date()
      };

      this.postCreated.emit(newPost); // ⬅️ نبعته للأب
      this.postForm.reset();
    }
  }
}



