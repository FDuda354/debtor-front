import { Component, OnInit } from '@angular/core';
import { DebtDTO } from '../../models/debt-dto';
import { ActivatedRoute } from '@angular/router';
import { DebtService } from '../../../../services/debt.service';
import { Page } from '../../models/page';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../../../services/transaction.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-debt-details',
  templateUrl: './debt-details.component.html',
  styleUrls: ['./debt-details.component.scss'],
  providers: [MessageService]
})
export class DebtDetailsComponent implements OnInit {
  id: string | null = null;
  debt!: DebtDTO
  transactions!: Transaction[]
  totalRecords: number = 0;
  rows: number = 5;
  isLoading: boolean = true;
  isMobileVisible = false;
  skeletonTransactions: any[] = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private debtService: DebtService,
    private transactionService: TransactionService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadDebt(this.id)
      this.loadTransaction(this.id, 0, 10)
    }

  }

  private loadDebt(id: string) {
    this.debtService.getDebtById(id).subscribe({
      next: (debtDTO: DebtDTO) => {
        this.debt = debtDTO
        console.log(this.debt)
      },
      error: error => {
        console.error('Error loading customers', error);

      }
    });
  }

  private loadTransaction(id: string, page: number, size: number) {
    this.isLoading = true;
    this.transactionService.getTransactionsByDebtId(id, page, size).subscribe({
      next: (page: Page<Transaction>) => {
        this.transactions = page.content;
        this.totalRecords = page.totalElements;
        this.rows = page.size;
        this.isLoading = false;
        console.log(this.transactions)
      },
      error: error => {
        console.error('Error loading transactions', error);
        this.isLoading = false;
        // this.showError('Błąd Servera', 'Nie udało się pobrać transakcji');
      }
    });
  }

}