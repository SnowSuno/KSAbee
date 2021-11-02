import React, {useEffect, useState} from "react";

import {useAccountList} from "./common/hooks";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileList from "./component/ProfileList";

export default function App() {
    const [sort, setSort] = useState({
        key: 'tier',
        reverse: false,
    });

    const {
        state: {data, loading, error},
        reload
    } = useAccountList();

    useEffect(() => {
        reload().then();
    }, [reload])

    if (!loading) {
        if (!error) {
            // console.log(data);
        } else {
            console.error(error);
        }
    }


    return (
        <div>
            <Header />
            <Toolbar />
            <ProfileList />
        </div>
    );
}