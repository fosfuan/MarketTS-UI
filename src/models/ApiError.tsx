class ApiError {
    constructor(status: string, statusText: string, error: string){
        this.Status = status;
        this.StatusText = statusText;
        this.Error = error;
    }

    public Status:string;
    public StatusText : string;
    public Error : string;
}

export {ApiError}