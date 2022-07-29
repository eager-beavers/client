import {dataDecryption, dataEncryption} from "../../util/Security";

test("Security Util Test", () => {
    const userId = "TestID";
    const userPassword = "TestPassWord112233";

    const encryptedUserId = dataEncryption(userId);
    const encryptedUserPassword = dataEncryption(userPassword);

    expect(encryptedUserId).not.toEqual(userId);
    expect(encryptedUserPassword).not.toEqual(userPassword);

    const decryptedUserId = dataDecryption(encryptedUserId.toString());
    const decryptedUserPassword = dataDecryption(encryptedUserPassword.toString());

    expect(decryptedUserId).toEqual(userId);
    expect(decryptedUserPassword).toEqual(userPassword);
});