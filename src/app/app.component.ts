import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any[] = [    {
      userName: 'Ali Gamal',
      userImage:'assets/user1.jpeg',
      content:'this is the first post',
      postImage:'assets/post1.jpg',
      liked:false,
      createdAt: new Date()
    },
    {
      userName: 'Ahmed Ali',
      userImage:'assets/user2.jpg',
      content:'this is the first post',
      postImage:'assets/post2.jpg',
      liked:false,
      createdAt: new Date()
    },
    {
      userName: 'Mohamed Samy',
      userImage:'assets/user3.jpg',
      content:'this is the first post',
      postImage:'assets/post3.jpg',
      liked:false,
      createdAt: new Date()
    }
  ];
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onPostCreated(newPost: any) {
    this.posts.push(newPost);
    this.showForm = false;
  }

  onDeletePost(index: number) {
    this.posts.splice(index, 1);
  }

  onLikeChanged(liked: boolean, index: number) {
    this.posts[index].liked = liked;
  }
}







