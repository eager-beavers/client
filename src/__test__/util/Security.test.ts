// beforeAll(() => {
//     jest.mock('crypto', function () {
//         return {...jest.requireActual('crypto'), type: 'web-crypto'};
//     });
//     Object.defineProperty(window, 'crypto', {value: {subtle: require('subtle')}, writable: true});
//     // @ts-ignore
//     Window['crypto'] = {subtle: require('subtle')};
// });
//
// afterAll(() => {
//     jest.unmock('crypto');
//     // @ts-ignore
//     delete Window['crypto'];
// });

import {dataDecryption, dataEncryption} from "../../util/Security";

test("Security Util Test", () => {
    const userId = "TestID";
    const userPassword = "TestPassWord112233";

    const encryptedUserId = dataEncryption(userId.toString());
    const encryptedUserPassword = dataEncryption(userPassword.toString());

    expect(encryptedUserId).not.toEqual(userId.toString());
    expect(encryptedUserPassword).not.toEqual(userPassword.toString());

    const decryptedUserId = dataDecryption(encryptedUserId.toString());
    const decryptedUserPassword = dataDecryption(encryptedUserPassword.toString());

    expect(decryptedUserId).toEqual(userId);
    expect(decryptedUserPassword).toEqual(userPassword);
});