export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: string;       // UserType enum → string
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface AuthResponse {
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  token: string;
}

export interface UserProfileResponse {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserWithRoleResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
