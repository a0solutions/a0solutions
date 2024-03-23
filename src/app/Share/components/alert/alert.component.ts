import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  show: boolean = false;
  text: string = '';
  constructor(private alert: AlertsService) {}
  ngOnInit() {
    this.alert.show.subscribe((x) => {
      this.show = x;
    });
    this.alert.text.subscribe((x) => {
      this.text = x;
    });
  }
  closeModal(): void {
    this.alert.show.next(false);
  }
}
