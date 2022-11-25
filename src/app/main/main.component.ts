import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  };

  myText = "Programming is fun, it is being able to do everything your mind imagines; but to make it a reality it is necessary to learn how to do it. That's why I made this site, for everyone who hasn't started yet at least know which path I took.";

  phrase = "This is a Phrase...";

};