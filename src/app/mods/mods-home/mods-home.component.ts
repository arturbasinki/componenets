import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    {
      title: 'Why is the sky blue?',
      content: 'Because it is so, dumb fucker!!',
    },
    {
      title: 'Why does an orange taste like?',
      content: "Because it can't taste like shit, dumb fucker!!",
    },
    {
      title: 'What color is that beaver?',
      content: 'It is brown beaver;)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
