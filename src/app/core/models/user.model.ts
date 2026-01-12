export interface LoginUser{
    email: string;
    password: string;
}

export interface LoginUserResponse{
    token: string;
    user: UserResponse;
}

export interface UserResponse{
    id: string;
    firstName: string;
    email: string;    
}

export interface CreateUser{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}