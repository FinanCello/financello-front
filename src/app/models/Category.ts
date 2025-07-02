export interface CategoryRequest {
  name: string;
  description?: string;
}

export interface CategoryResponse {
  name: string;
  description?: string;
}

export interface CategorySimpleResponse {
  id: number;
  name: string;
}

export interface CategoryTotalResponse {
    categoryId: number;
    categoryName: string;
    totalAmount: number;
    movementType: string;
}

export interface RecentMovementResponse {
    movementId: number;
    amount: number;
    date: string;
    categoryName: string;
    categoryDescription: string;
    movementType: string;
}