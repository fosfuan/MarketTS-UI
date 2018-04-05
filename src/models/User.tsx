class User{
    public access_token:string;
    public refresh_token:string;
    public userName:string;
    public userId:number;
    public isLogged: boolean;
    
    public constructor(accToken: string, refToken:string, userName:string, userId:number, isLogged:boolean) { 
        this.access_token = accToken; 
        this.refresh_token = refToken;
        this.userName = userName;
        this.userId = userId;
        this.isLogged = isLogged;
    }

}


export { User };