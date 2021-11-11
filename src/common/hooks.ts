import {useState} from "react";
import {Account} from "./api";

import {AccountStateType, AccountType} from "./types";
import axios from "axios";

export const useAccountList = () => {
  const [state, setState] = useState<AccountStateType>({
    data: [],
    loading: false,
    error: null,
  })

  const reload = async () => {
    try {
      setState({...state, error: null, loading: true});
      const data = await Account.getAccounts();
      // const data = await axios.get('https://api-ksabee.herokuapp.com/api/account') as AccountType[];
      setState({...state, data});
    } catch (e) {
      setState({...state, data: [], error: e as Error})
    } finally {
      setState({...state, loading: false})
    }
  }

  return {state, reload};
};
