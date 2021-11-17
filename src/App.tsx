import React from "react";

import Header from "./component/Header";
import Toolbar from "./component/Toolbar";
import ProfileTable from "./component/ProfileTable";
import Footer from "./component/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <ProfileTable />
      <Footer />
    </div>
  );
}
