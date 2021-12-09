import axios, {AxiosResponse} from "axios";
import {AccountType, AccountCreate, AccountUpdate, AccountDelete, ResponseMessageType} from "./types";


export const instance = axios.create({
    baseURL: "https://api-ksabee.herokuapp.com/api/",
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string, body: {}) => instance.delete(url, {data: body}).then(responseBody),
};

export const Account = {
    getAccounts: async (): Promise<AccountType[]> => requests.get('account'),
    getAccount: async (sid: string): Promise<AccountType> => requests.get(`account/${sid}`),
    createAccount: async (sid: string, body: AccountCreate): Promise<ResponseMessageType> =>
        requests.post(`account/${sid}`, body),
    updateAccount: async (sid: string, body: AccountUpdate): Promise<ResponseMessageType> =>
        requests.put(`account/${sid}`, body),
    deleteAccount: async (sid: string, body: AccountDelete): Promise<ResponseMessageType> =>
        requests.delete(`account/${sid}`, body)
}
