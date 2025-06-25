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