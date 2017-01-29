import { Component } from '@angular/core';
import { PostsService } from "../services/posts.service";

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers:[PostsService]
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];

  constructor(private postsService: PostsService){
    this.name = 'Amarnath';
    this.email='amarnath@gmail.com',
    this.address={
      street:'12 Main st',
      city:'hyderabad',
      state:'Telangana'
    }
    this.hobbies=['Music','Movie'];
    this.showHobbies=false;

    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts=posts;
    });
  }

  toggleHobbies() {
    console.log("click hobbies");
    if(this.showHobbies){
      this.showHobbies=false;
    }else{
      this.showHobbies=true;
    }
  }

  addHobby(hobby:string){
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }
}

interface address {
    street:string;
    city:string;
    state:string;
}

interface Post {
    id: number;
    title:string;
    body:string;
}
