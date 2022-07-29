import crypto from 'crypto-js';

export const dataEncryption = (value: string) => {
    return crypto.AES.encrypt(value, "TEST KEY");
}

export const dataDecryption = (value: string) => {
    return CryptoJS.AES.decrypt(value, "TEST KEY").toString();
}