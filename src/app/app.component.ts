import { Component } from '@angular/core';
import { Post } from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: "Dolphin",
      imageUrl: "/assets/dolphin.jpg",
      username:"Dolphin Jack",
      content: "The dolphin is a marine mammal belonging to the family Delphinidae. These social and intelligent animals are part of the whale order and can be found in the world's oceans."
    },
    {
      title: "Panda",
      imageUrl: "/assets/panda.jpg",
      username:"Panda Jack",
      content: "Pandas are large mammals with a distinctive black and white coloration. These adorable creatures primarily feed on bamboo leaves and are typically found in the mountainous regions of China."
    },
    {
      title: "Tiger",
      imageUrl: "/assets/tiger.jpg",
      username:"Tiger Jack",
      content: "Tigers are majestic and powerful big cats known for their distinctive orange fur with black stripes. They are skilled hunters and mainly inhabit forests and grasslands in various parts of Asia, displaying a solitary and territorial nature."
    }

  ]; 
}
