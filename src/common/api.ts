import axios, {AxiosResponse} from "axios";
import {AccountType, AccountCreate, AccountUpdate, AccountDelete, ResponseMessageType} from "./types";

export const instance = axios.create({
    baseURL: "https://api-ksabee.herokuapp.com/api/",
});

instance.interceptors.response.use(undefined, (error) => {
    const {status, data, config} = error.response;
    console.log(status, data, config);
    if (status === 400) {
        if (data.code === 'bad_request')    alert('요청 포맷이 잘못되었습니다. 관리자에게 문의해주세요.')
    }
    if (status === 404) {
        if (data.code === 'invalid_sid')    alert('존재하지 않는 학번입니다.');
    }
    if (status === 406) {
        if (data.code === 'existing_user')   alert('이미 존재하는 계정입니다.');
        if (data.code === 'invalid_nick')   alert('존재하지 않는 롤 닉네임입니다.');
        if (data.code === 'unreg_user')     alert('등록되지 않은 학번입니다.');
        if (data.code === 'auth_failed')    alert('잘못된 비밀번호 입니다.');
    }

    if (status === 503) {
        if (data.code === 'api_fetch_err')  alert('opgg와 연동에 실패하였습니다. 관리자에게 문의해주세요.');
    }

})

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
