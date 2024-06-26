import { Component, HostListener, OnInit } from '@angular/core';
import { Transaction } from '../../../common/models/transaction';
import { DebtStatus } from '../../../common/models/debt-dto';
import { TransactionService } from '../../../../services/transaction.service';
import { MessageService } from 'primeng/api';
import { Page } from '../../../common/models/page';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
  providers: [MessageService]
})
export class HomeTableComponent implements OnInit {
  transactions: Transaction[] = [];
  isMobileVisible = false;
  isLoading = true;
  skeletonTransactions: any[] = [1, 2, 3, 4, 5];


  constructor(
    private transactionService: TransactionService,
    private messageService: MessageService,
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileVisible = window.innerWidth <= 1050;
  }

  ngOnInit(): void {
    this.isMobileVisible = window.innerWidth <= 1050;
    this.loadTransaction()

  }

  private loadTransaction() {
    this.isLoading = true;
    this.transactionService.getTransactionsByCustomerId(0, 5).subscribe({
      next: (page: Page<Transaction>) => {
        this.transactions = page.content;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading transactions', error);
        this.isLoading = false;
        this.showError('Błąd Servera', 'Nie udało się pobrać ostatnich transakcji');
      }
    });
  }


  showError(title: string, content: string) {
    this.messageService.add({
      key: 'tr',
      severity: 'error',
      summary: title,
      detail: content,
      life: 10000

    });
  }

  getDebtStatus(status: DebtStatus): string {
    switch (status) {
      case DebtStatus.ACTIVE:
        return 'AKTYWNY';
      case DebtStatus.FINISHED:
        return 'ZAKOŃCZONY';
      case DebtStatus.CANCELLED:
        return 'ANULUWANY';
      case DebtStatus.ARCHIVED:
        return 'ZARCHYWIZOWANY';
      default:
        return '';
    }
  }
}
