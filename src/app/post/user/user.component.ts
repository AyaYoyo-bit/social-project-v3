import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-user',
  templateUrl: 'user.component.html'
})
export class PostUserComponent {
  @Input() userName = '';
  @Input() userImg = '';
}

