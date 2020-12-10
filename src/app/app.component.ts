import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AppComponent {
  condition = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  toggleCondition(): void {
    this.condition = !this.condition;
  }

  confirm(): void {
    if (this.condition) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.openFile();
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted'
          });

          return;
        },
        reject: () => {
          return;
        }
      });
    }

    this.openFile();
  }

  confirm1(): void {
    if (this.condition) {
      const result = confirm('Are you sure that you want to proceed?');

      if (result) {
        this.openFile();

        return;
      } else {
        return;
      }
    }

    this.openFile();
  }

  openFile(): void {
    console.log('Some file');
  }
}
