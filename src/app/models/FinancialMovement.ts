import { CategoryResponse } from './Category';

export interface RegisterFinancialMovementRequest {
  amount: number;
  date: string;            // LocalDate en Java → ISO string
  movementType: string;    // MovementType enum → string
  categoryId: number;
  currencyType: string;    // CurrencyType enum → string
}

export interface RegisterFinancialMovementResponse {
  amount: number;
  date: string;
  movementType: string;
  categoryResponse: CategoryResponse;
  currencyType: string;
}

export interface TransactionResponse {
  amount: number;
  currencyName: string;
  date: string;
  movementName: string;
  categoryName: string;
}
