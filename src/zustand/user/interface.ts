interface LoginUser {
    id: string;
    token: string
}

export interface UserStore {
    user: any
    signUp: () => Promise<string>
    login: () => Promie
        
}
