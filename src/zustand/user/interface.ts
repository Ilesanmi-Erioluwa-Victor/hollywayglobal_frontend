interface LoginUser {
    id: string;
    token: string
}

export interface UserStore {
    user: any
    signUp: () => Promise<string>
    login: (email: string, password: string) => Promise<LoginUser>

        
}
