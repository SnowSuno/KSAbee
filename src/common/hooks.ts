import {useState} from "react";
import {readAccountList} from "./api";

import {AccountType} from "./types";
interface StateType {
    data: AccountType[];
    loading: boolean;
    error: Error | null;
}

export const useAccountList = () => {
    const [state, setState] = useState<StateType>({
        data: [],
        loading: false,
        error: null,
    })

    const reload = async () => {
        try {
            setState({...state, error: null, loading: true});
            const response = await readAccountList();
            setState({...state, data: response.data});
        } catch (e) {
            setState({...state, data: [], error: e as Error})
        } finally {
            setState({...state, loading: false})
        }
    }
    return {state, reload};
};
