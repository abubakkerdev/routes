import React from "react";
import { Outlet } from "react-router-dom";

function Account() {
  return (
    <div>
      Account
      <Outlet />
    </div>
  );
}

export default Account;
