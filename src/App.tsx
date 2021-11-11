import React, {useEffect, useState} from "react";
import {useAccountList} from "./common/hooks";
import {Account, instance} from "./common/api";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileList from "./component/ProfileList";


export default function App() {
    // const [sort, setSort] = useState({
    //     key: 'tier',
    //     reverse: false,
    // });
    const s = useAccountList();
    console.log(s.reload)

    useEffect(() => {
      const d = Account.getAccounts();
      console.log(d);
    }, [])


    // const {
    //     state: {data, loading, error},
    //     reload
    // } = useAccountList();
    // console.log(reload)

    // useEffect(() => {
    //     reload().then();
    // }, [reload])

    // if (!loading) {
    //     if (!error) {
    //         // console.log(data);
    //     } else {
    //         console.error(error);
    //     }
    // }

    return (
        <div>
            <Header />
            <Toolbar />
            <ProfileList />
        </div>
    );
}
