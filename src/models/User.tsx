class User{
    public access_token:string;
    public refresh_token:string;
    public userName:string;
    public userId:number;
    
    public constructor(accToken: string, refToken:string, userName:string, userId:number) { 
        this.access_token = accToken; 
        this.refresh_token = refToken;
        this.userName = userName;
        this.userId = userId;
    }

}


export { User };