import crypto from 'crypto-js';

export const dataEncryption = (value: string) => {
    return crypto.AES.encrypt(value, "TEST KEY").toString();
}

export const dataDecryption = (value: string) => {
    return crypto.AES.decrypt(value, "TEST KEY").toString();
}