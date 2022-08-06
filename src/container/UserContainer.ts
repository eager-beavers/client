import UserModel from '../model/UserModel';

interface User {
    key: number,
    name: string,
    phoneNumber: string
}

class UserContainer {

  public users: User[];

  private userModelList: UserModel[];

  // db 연결 시 가장 큰 값으로 초기화 필요
  private uniqueKey: number;

  constructor() {
    this.userModelList = new Array<UserModel>;
    this.users = new Array<User>;
    this.uniqueKey = 1;
  }

  public getUniqueKey(): number {
    return this.uniqueKey;
  }

  public setUniqueKey(uniqueKey: number): void {
    this.uniqueKey = uniqueKey;
  }

  public getUserModelList(): UserModel[] {
    return this.userModelList;
  }

}

export default UserContainer;