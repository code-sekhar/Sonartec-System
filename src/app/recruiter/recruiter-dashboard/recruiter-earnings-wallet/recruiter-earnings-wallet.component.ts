import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DashboardWalletComponent } from '../../../component/dashboard-wallet/dashboard-wallet.component';
import { TransactionHistoryComponent } from '../../../component/transaction-history/transaction-history.component';

@Component({
  selector: 'app-recruiter-earnings-wallet',
  imports: [DashboardTitleComponent,DashboardWalletComponent,TransactionHistoryComponent],
  templateUrl: './recruiter-earnings-wallet.component.html',
  styleUrl: './recruiter-earnings-wallet.component.css'
})
export class RecruiterEarningsWalletComponent {
  headingText: string = 'Earnings/Wallet';
}
