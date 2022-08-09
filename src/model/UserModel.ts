class UserModel {

    private userUniqueNum: number;
    private auth: string;
    private mobileNumber: string;
    private userName: string;
    private createdDate: string;
    private userPw: string;

    constructor(userUniqueNum: number, mobileNumber: string, userName: string, userPw: string) {
        this.userUniqueNum = userUniqueNum;
        this.auth = "A";
        this.mobileNumber = mobileNumber;
        this.userName = userName;
        this.createdDate = (new Date()).toString();
        this.userPw = userPw;
    }

    public getUserUniqueNum(): number {
        return this.userUniqueNum;
    }

    public getAuth(): string {
        return this.auth;
    }

    public setMobileNumber(mobileNumber: string): void {
        this.mobileNumber = mobileNumber;
    }

    public getMobileNumber(): string {
        return this.mobileNumber;
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getCreatedDate(): string {
        return this.createdDate;
    }

    public setUserPw(userPw: string): void {
        this.userPw = userPw;
    }

    public getUserPw(): string {
        return this.userPw;
    }
}

export default UserModel;