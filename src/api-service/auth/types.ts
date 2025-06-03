
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse{
    tokenType: "Bearer";
    accessToken: string;
}

