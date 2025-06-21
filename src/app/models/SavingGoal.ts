export interface AddSavingGoalRequest {
  name: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: string;
}

export interface UpdateSavingGoalRequest {
  targetAmount?: number;
  dueDate?: string;
}

export interface AddSavingGoalResponse {
  name: string;
  targetAmount: number;
  dueDate: string;
}