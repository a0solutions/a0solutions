import { Component, OnInit } from '@angular/core';
declare var scrollAll: any;
import 'src/assets/js/main.js';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  scroll: any;
  ngOnInit(): void {
    new scrollAll();
  }
  scrollToElement(event: string) {
    window.scrollTo(0, 5000);
    console.log(event);
  }
}
