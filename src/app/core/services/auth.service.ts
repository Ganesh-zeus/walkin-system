export class AuthService {
    isLoggedIn:boolean = false;

    getLogInStatus(){
        return this.isLoggedIn;
    }
    
    setLogInStatus(status:boolean){
        this.isLoggedIn = status;
    }
}