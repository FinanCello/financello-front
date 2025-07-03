export interface AddSavingGoalRequest {
  name: string;
  targetAmount: number;
  dueDate: string;
}

export interface UpdateSavingGoalRequest {
  name?: string;
  targetAmount?: number;
  dueDate?: string;
}

export interface AddSavingGoalResponse {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: string;
  userId: number;
}