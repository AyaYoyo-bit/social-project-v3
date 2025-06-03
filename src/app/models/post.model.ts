export class Post {
  userName: string = "";
  userImage: string = "";
  content: string = "";
  postImage?: string;
  liked: boolean = false;
  createdAt: Date = new Date();

  constructor(data: Partial<Post>) {
    Object.assign(this, data);
  }
}
