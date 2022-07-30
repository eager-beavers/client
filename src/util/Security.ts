import crypto from 'crypto-js';

export const dataEncryption = (value: string) => {
    return crypto.HmacSHA1(value, "TEST KEY").toString();
}

export const dataDecryption = (value: string) => {
    return crypto.HmacSHA1(value, "TEST KEY").toString();
}