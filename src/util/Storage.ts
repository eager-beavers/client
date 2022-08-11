import Cookies from 'js-cookie';

export const getCookie = (key: string) => {
    return Cookies.get(key);
}

export const setCookie = (key: string, value: any) => {
    return Cookies.set(key, String(value));
}

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
}

export const setLocalStorage = (key: string, value: any) => {
    return localStorage.setItem(key, String(value));
}

export const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key);
}

export const setSessionStorage = (key: string, value: any) => {
    return sessionStorage.setItem(key, String(value));
}