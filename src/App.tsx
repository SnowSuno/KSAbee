import React from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileList from "./component/ProfileTable";
import Fotter from "./component/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <ProfileList />
      <Fotter />
    </div>
  );
}
