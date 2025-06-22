export interface CategoryRequest {
  name: string;
  description?: string;
}

export interface CategoryResponse {
  name: string;
  description?: string;
  id: number;
}

export interface CategorySimpleResponse {
  name: string;
  id: number;
}
