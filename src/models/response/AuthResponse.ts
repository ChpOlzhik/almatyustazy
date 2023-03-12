export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
  role: string;
  expiresAt: string;
}

export interface RegisterResponse {
  username: string;
  email: string;
  middleName: string;
  firstName: string;
  lastName: string;
  role: string;
  id: number;
}
