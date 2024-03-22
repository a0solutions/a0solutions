import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() scroll: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.clickScroll('home');
  }
  clickScroll(evento: string) {
    this.scroll.emit(evento);
  }
}
