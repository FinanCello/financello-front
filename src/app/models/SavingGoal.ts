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
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: string;
}