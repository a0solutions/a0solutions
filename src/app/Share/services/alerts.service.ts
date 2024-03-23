import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);
  text: BehaviorSubject<string> = new BehaviorSubject('false');
  setAlert(alert: string): void {
    if (alert == 'contactDone') {
      this.text.next(
        "Thank you for reaching out! Your message has been successfully sent. We'll get back to you as soon as possible"
      );
    } else if (alert == 'error') {
      this.text.next(
        'Oops! It seems there was an error submitting your message. Please double-check your information and try again. If the issue persists, feel free to reach out to us directly. We apologize for any inconvenience.'
      );
    }
    this.show.next(true);
  }
}
