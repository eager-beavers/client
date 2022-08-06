import create from "zustand";
import UserModel from "../model/UserModel";

interface UserStore {
    userList: Array<UserModel>;
    addUser: (user: UserModel) => void;
    removeUser: (userUniqueNum: number) => void;
    getUserList: () => void;
}

//TODO: userList를 Front, Back에서 둘다 관리하는게 맞는지 생각해보기 (데이터의 Sync를 맞춰야하는 문제가 발생함)
export const userStore = create<UserStore>(set => ({
    userList: [],

    addUser: (user: UserModel) => {
        //TODO: Backend ADD API Call

        set((state) => ({
            userList: [...state.userList, user]
        }))
    },

    removeUser: (userUniqueNum: number) => {
        //TODO Backend REMOVE API Call

        set((state) => ({
            userList: state.userList.filter(user => user.getUserUniqueNum() !== userUniqueNum)
        }))
    },

    getUserList: async () => {
        // try {
        //     const result = getFunction();
        // } catch (e) {
        // throw new Error();
        // }
    }
}))