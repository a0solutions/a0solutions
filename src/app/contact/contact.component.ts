import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './services/contactService.service';
import { AlertsService } from '../Share/services/alerts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private query: ContactService, private alert: AlertsService) {}
  sendForm(form: NgForm): void {
    form.value.botcheck == '' ? this.goToBackEnd(form) : null;
  }
  goToBackEnd(values: NgForm): void {
    this.query.postContacForm(values.value).subscribe({
      next: this.manageResponse.bind(this),
      error: console.log.bind(this),
    });
    values.reset();
  }
  manageResponse(response: any) {
    response
      ? this.alert.setAlert('contactDone')
      : this.alert.setAlert('error');
  }
}
